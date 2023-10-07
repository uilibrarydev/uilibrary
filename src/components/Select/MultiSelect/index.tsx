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
import { Input } from '../../index'
import { useGetElemPositions, useOnOutsideClick, useGetElemSizes } from '../../../hooks'
import { getStringWidth, setTranslationValue } from '../../../utils'
import { Footer } from '../SharedComponents'
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
    selectedItems = [],
    setSelectedItems,
    name,
    setFieldValue,
    value,
    label,
    placeHolder,
    isRequiredField,
    translations,
    ...rest
  } = props

  const localizations = { ...TRANSLATIONS_DEFAULT_VALUES, ...translations }

  const { overflowText } = localizations

  const initialSelected = (value as TSelectedValue[]) || selectedItems

  const inputRef = useRef<HTMLInputElement | null>(null)

  const [isOpen, setIsOpen] = useState(false)
  const [selectedValues, setSelectedValues] = useState<TSelectedValue[]>(initialSelected)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const closeDropdown = () => setIsOpen(false)
  const openDropdown = () => setIsOpen(true)

  const { width } = useGetElemSizes(containerRef.current)

  useEffect(() => {
    setSelectedValues(initialSelected)
  }, [initialSelected])

  const cancelSelectedItems = useCallback(() => {
    submitSelectedValue(initialSelected)
  }, [])

  useOnOutsideClick(containerRef.current, cancelSelectedItems, isOpen, useId())

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

  const footer = useMemo(() => {
    return (
      <Footer
        buttonProps={footerButtonProps}
        onCancel={cancelSelectedItems}
        onApply={applySelectedItems}
      />
    )
  }, [cancelSelectedItems, applySelectedItems])

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

  return (
    <div className="select select--multi" ref={containerRef}>
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
        />
      </div>

      <SelectComp
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        options={options}
        isOpen={isOpen}
        footer={footer}
        containerStyles={{ left, width: containerWidth, top: bottom }}
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
    </div>
  )
})

Select.displayName = 'Select'
export default Select
