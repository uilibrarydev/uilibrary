import React, {
  forwardRef,
  ReactElement,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState
} from 'react'
import classNames from 'classnames'
import { Input } from '../../Input'
import {
  useOnOutsideClick,
  useGetElemSizes,
  useGetElemPositions,
  useGetHasBottomSpace,
  useHideOnScroll
} from '../../../hooks'
import { getStringWidth, setTranslationValue } from '../../../utils'
import { Footer, Loading } from '../SharedComponents'
import { MultiSelect } from './Multi'
import { MultiSelectGrouped } from './Grouped'
import { MultiSelectWithTabs } from './WithTabs'
import { SELECTED_VISIBLE_MIN_COUNT, TRANSLATIONS_DEFAULT_VALUES } from './consts'
import { TMultiSelectPropTypes } from '../types'
import '../../../assets/styles/components/_select.scss'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Select = forwardRef((props: TMultiSelectPropTypes, ref): ReactElement | null => {
  const {
    withTabs,
    isGrouped,
    options,
    footerButtonProps = {
      confirm: {
        buttonText: 'Apply'
      },
      cancel: { buttonText: 'Cancel' }
    },
    selectedItems,
    setSelectedItems,
    name,
    setFieldValue,
    value,
    label,
    placeHolder,
    isRequiredField,
    translations,
    labelAddons,
    isLoading,
    className = '',
    ...rest
  } = props

  const localizations = { ...TRANSLATIONS_DEFAULT_VALUES, ...translations }

  const { overflowText } = localizations

  const initialSelected = (value as TSelectedValue[]) || selectedItems

  const inputRef = useRef<HTMLInputElement | null>(null)
  const [dropdownRef, setDropdownRef] = useState<HTMLDivElement | null>(null)

  const [isOpen, setIsOpen] = useState(false)
  const [selectedValues, setSelectedValues] = useState<TSelectedValue[]>(initialSelected)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { height: inputHeight } = useGetElemSizes(inputRef.current)

  const closeDropdown = () => setIsOpen(false)
  const openDropdown = () => setIsOpen(true)

  const { width } = useGetElemSizes(containerRef.current)

  useEffect(() => {
    setSelectedValues((value as TSelectedValue[]) || [])
  }, [value])

  useEffect(() => {
    setSelectedValues(selectedItems || [])
  }, [selectedItems])

  const cancelSelectedItems = useCallback(() => {
    submitSelectedValue(initialSelected)
    setSelectedValues(initialSelected)
  }, [initialSelected])

  useOnOutsideClick(containerRef.current, cancelSelectedItems, isOpen, useId())
  useHideOnScroll(closeDropdown)

  const submitSelectedValue = (selections: TSelectedValue[]) => {
    if (setSelectedItems) {
      setSelectedItems(selections)
    }
    if (name && setFieldValue) {
      setFieldValue(name, selections)
    }

    closeDropdown()
  }

  const applySelectedItems = () => {
    submitSelectedValue(selectedValues)
    closeDropdown()
  }

  const checkIsValueOverflowed = useCallback(
    (value: string) => {
      const elemWidth = getStringWidth(value, 14)
      return elemWidth > width - 80 // padding and width of (+number)
    },
    [width]
  )

  const toggleDropdown = (e?: TClickEventType) => {
    const clickedElement = e?.target as HTMLDivElement
    if (e && clickedElement.className && clickedElement.className.indexOf('icon-') !== -1) {
      setIsOpen(!isOpen)
      e.preventDefault()
    } else {
      openDropdown()
    }
  }

  const onItemSelect = useCallback((item: TSelectedValue) => {
    setSelectedValues((selected: TSelectedValue[]) => [...selected, item])
  }, [])

  const onItemDeselect = (item: TSelectedValue) => {
    setSelectedValues((selected: TSelectedValue[]) =>
      selected.filter((optionValue: TSelectedValue) => optionValue.value !== item.value)
    )
  }

  const selectedItemsLabels = useMemo(() => {
    if (!selectedValues || !selectedValues.length) {
      return ''
    }
    const onlyLabels = selectedValues.map((selected) => selected.label)
    const joinedLabel = onlyLabels.join(', ')

    return checkIsValueOverflowed(joinedLabel)
      ? setTranslationValue(overflowText, selectedValues.length)
      : joinedLabel
  }, [options, selectedValues, checkIsValueOverflowed])

  const optionsCount = useMemo(() => {
    if (isGrouped || withTabs) {
      const typed_options = options as TSelectGroupOptions
      return typed_options.reduce((acc: number, option: TSelectGroupOption) => {
        const { data } = option
        return acc + data.length
      }, 0)
    }
    return options.length
  }, [options])
  const { bottom, left } = useGetElemPositions(inputRef.current)
  const { width: containerWidth } = useGetElemSizes(containerRef.current)

  const SelectComp = withTabs ? MultiSelectWithTabs : isGrouped ? MultiSelectGrouped : MultiSelect

  const hasBottomSpace = useGetHasBottomSpace({
    element: dropdownRef,
    input: inputRef.current
  })

  return (
    <div className={classNames('select select--multi', className)} ref={containerRef}>
      <div onClick={toggleDropdown}>
        <Input
          readonly
          label={label}
          ref={inputRef}
          className="select__input"
          placeholder={placeHolder}
          required={isRequiredField}
          currentValue={selectedItemsLabels}
          rightIconProps={{ name: isOpen ? 'caret-up-hover' : 'caret-down-hover', size: 'xsmall' }}
          labelAddons={labelAddons}
        />
      </div>

      <>
        {isOpen && (
          <div
            className={classNames('select__options', hasBottomSpace ? '' : 'select__open_top')}
            ref={setDropdownRef}
            style={{
              left,
              width: containerWidth,
              top: hasBottomSpace ? bottom : bottom - inputHeight - 10
            }}
          >
            {isLoading ? (
              <Loading />
            ) : (
              <>
                <SelectComp
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  options={options}
                  isOpen={isOpen}
                  translations={localizations}
                  selectedValues={selectedValues}
                  onItemSelect={onItemSelect}
                  onItemDeselect={onItemDeselect}
                  toggleDropdown={toggleDropdown}
                  setSelectedValues={setSelectedValues}
                  checkIsValueOverflowed={checkIsValueOverflowed}
                  isSearchAvailable={optionsCount > SELECTED_VISIBLE_MIN_COUNT}
                  {...rest}
                />
              </>
            )}
            <Footer
              buttonProps={footerButtonProps}
              onCancel={cancelSelectedItems}
              onApply={applySelectedItems}
            />
          </div>
        )}
      </>
    </div>
  )
})

Select.displayName = 'Select'
export default Select
