import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import classNames from 'classnames'
import {
  useOnOutsideClick,
  useGetElemPositions,
  useGetElemSizes,
  useGetHasBottomSpace,
  useHideOnScroll
} from '../../hooks'
import Input from '../Input'
import Text from '../Text'
import { OptionItem } from '../../helperComponents'
import { Loading } from './SharedComponents'
import { SELECTED_VISIBLE_MIN_COUNT } from './MultiSelect/consts'
import { TSingleSelectPropTypes } from './types'
import '../../assets/styles/components/_select.scss'

const SingleSelect = (props: TSingleSelectPropTypes): JSX.Element | null => {
  const {
    className,
    size = 'large',
    name,
    value,
    label,
    avatar,
    options,
    hasError,
    isLoading,
    isValid,
    withSearch,
    disabled,
    dataId = '',
    placeHolder,
    selectedItem = null,
    setFieldValue,
    setSelectedItem,
    outerHelperText,
    innerHelperText,
    isRequiredField,
    labelLeftIconProps,
    labelRightIconComponent,
    optionRightIconComponent,
    labelAddons,
    tooltipAddons
  } = props
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { scrollHeight } = useGetElemSizes(scrollRef.current)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [searchValue, setSearchValue] = useState<string>('')
  const [dropdownRef, setDropdownRef] = useState<HTMLDivElement | null>(null)
  const currentSelection = (value as TItemValue) || selectedItem

  const [itemLabel, setItemLabel] = useState<string | null>('')

  const setCurrentSelectedLabel = useCallback(() => {
    const label = options.find((item) => item.value === currentSelection)
    setItemLabel(label?.label.toString() || '')
  }, [currentSelection, options])

  useEffect(() => {
    setCurrentSelectedLabel()
  }, [setCurrentSelectedLabel])

  const openDropdown = () => setIsOpen(true)
  const closeDropdown = () => setIsOpen(false)

  const handleOutsideClick = () => {
    if (!searchValue && isRequiredField) {
      setCurrentSelectedLabel()
    }
    closeDropdown()
  }

  useOnOutsideClick(containerRef.current, handleOutsideClick, isOpen, useId())
  useHideOnScroll(closeDropdown)

  const { bottom, left } = useGetElemPositions(inputRef.current)
  const { height: inputHeight } = useGetElemSizes(inputRef.current)
  const { width } = useGetElemSizes(containerRef.current)

  const filteredData = useMemo(() => {
    if (!searchValue) {
      return options
    }

    return options.filter((dataItem) => {
      return (
        typeof dataItem.label === 'string' &&
        dataItem.label.toLowerCase().includes(searchValue.toLowerCase())
      )
    })
  }, [searchValue, options])

  const onItemSelect = (value: TItemValue) => {
    if (setSelectedItem) {
      setSelectedItem(value)
    }
    if (name && setFieldValue) {
      setFieldValue(name, value)
    }

    closeDropdown()
  }

  const onItemDeselect = () => onItemSelect(null)

  const onOpenOptions = (e: TClickEventType): void => {
    const result = e?.target as HTMLDivElement
    if (e && result.className && result.className.indexOf('icon-') !== -1) {
      setIsOpen(!isOpen)
      e.preventDefault()
      return
    } else {
      openDropdown()
    }
  }

  const clickHandler =
    (isSelected: boolean) =>
    ({ value }: TSelectedValue) => {
      setSearchValue('')
      if (!isSelected) {
        onItemSelect(value)
        return
      }
      if (!isRequiredField) {
        onItemDeselect()
      }
    }

  const onSearch = (e: TChangeEventType) => {
    setItemLabel(null)
    setSearchValue(e.target.value)
  }
  const hasBottomSpace = useGetHasBottomSpace({
    element: dropdownRef,
    input: inputRef.current
  })

  return (
    <div className={classNames(`select select--${size}`, className)} ref={containerRef}>
      <div onClick={onOpenOptions}>
        <Input
          size={size}
          data-id={dataId}
          hasError={hasError}
          className="select__input"
          label={label}
          onChange={onSearch}
          required={isRequiredField}
          rightIconProps={{
            name: isOpen ? 'caret-up-hover' : 'caret-down-hover',
            size: 'xsmall'
          }}
          readonly={!withSearch || options.length <= SELECTED_VISIBLE_MIN_COUNT}
          placeholder={placeHolder}
          value={itemLabel}
          isValid={isValid}
          disabled={disabled}
          helperText={isOpen ? '' : outerHelperText}
          ref={inputRef}
          labelAddons={labelAddons}
          autoComplete="false"
        />
      </div>

      {isOpen && (
        <div
          className={classNames('select__options', hasBottomSpace ? '' : 'select__open_top')}
          style={{ left, width, top: hasBottomSpace ? bottom : bottom - inputHeight - 10 }}
          ref={setDropdownRef}
        >
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div
                ref={scrollRef}
                className={classNames(
                  'select__options__scroll',
                  'scrollbar',
                  'scrollbar--vertical',
                  {
                    'mr-6': scrollHeight > 300
                  }
                )}
              >
                {innerHelperText ? (
                  <div className="content-top">
                    <Text size="xsmall" type="secondary" className="content-top__label">
                      {innerHelperText}
                    </Text>
                  </div>
                ) : null}

                {filteredData.map((item: TSelectOption) => {
                  const isSelected = item.value === currentSelection
                  return (
                    <OptionItem
                      tooltipAddons={tooltipAddons}
                      data={item}
                      key={item.value}
                      onClick={clickHandler(isSelected)}
                      labelLeftIconProps={labelLeftIconProps}
                      OptionRightIconComponent={optionRightIconComponent}
                      LabelRightIconComponent={labelRightIconComponent}
                      avatar={avatar}
                      disabled={item.disabled}
                      isSelected={isSelected}
                    />
                  )
                })}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default SingleSelect
