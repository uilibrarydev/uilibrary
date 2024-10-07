import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import classNames from 'classnames'
import {
  useOnOutsideClick,
  useGetElemPositions,
  useGetElemSizes,
  useGetHasBottomSpace,
  useGetHasTopSpace
} from '../../../hooks'
import { Input } from '../../Input'
import { Text } from '../../Text'
import { OptionItem } from '../../../helperComponents'
import { Loading } from '../SharedComponents'
import { TSingleSelectPropTypes } from '../types'
import { SELECTED_VISIBLE_MIN_COUNT } from '../constants'
import { useChangePositionsOnScroll } from '../../../hooks/useChangePositionsOnScroll'
import { IconCaretUpFilled } from '../../SVGIcons/IconCaretUpFilled'
import { IconCaretDownFilled } from '../../SVGIcons/IconCaretDownFilled'
import { noop } from '../../../utils/helpers'
import { DROPDOWN_AND_INPUT_GAP } from '../../../consts'

export const Select = (props: TSingleSelectPropTypes): JSX.Element | null => {
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
  const [selectedOption, setSelectedOption] = useState<TSelectOption | null>(null)

  const setCurrentSelectedLabel = useCallback(() => {
    const selectedItem = options.find((item) => item.value === currentSelection) as TSelectOption
    setSelectedOption(selectedItem)
  }, [currentSelection, options])
  
  const leftIconProps = selectedOption?.optionLeftIcon?.Component
    ? {
        Component: selectedOption?.optionLeftIcon?.Component
      }
    : null

  useEffect(() => {
    setCurrentSelectedLabel()
  }, [setCurrentSelectedLabel])

  const openDropdown = () => setIsOpen(true)
  const closeDropdown = () => {
    setIsOpen(false)
    setSearchValue('')
  }

  const handleOutsideClick = () => {
    if (!searchValue && isRequiredField) {
      setCurrentSelectedLabel()
    }
    closeDropdown()
  }

  useOnOutsideClick(containerRef.current, handleOutsideClick, isOpen, useId())

  const { bottom, left, top } = useGetElemPositions(inputRef.current)
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
    const className = result?.getAttribute('class')
    if (
      e &&
      className &&
      (className.indexOf('icon-') !== -1 || className.indexOf('svg-icon') !== -1)
    ) {
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
    setSelectedOption(null)
    setSearchValue(e.target.value)
  }
  const { hasBottomSpace } = useGetHasBottomSpace({
    element: dropdownRef,
    input: inputRef.current
  })

  const hasTopSpace = useGetHasTopSpace({
    element: dropdownRef,
    input: inputRef.current
  })

  useChangePositionsOnScroll(inputRef?.current, dropdownRef, hasBottomSpace)

  return (
    <div
      data-id={`${dataId}-content`}
      className={classNames(`select select--${size}`, className)}
      ref={containerRef}
    >
      <div onClick={disabled ? noop : onOpenOptions}>
        <Input
          size={size === 'large' ? 'large' : 'small'}
          dataId={dataId}
          hasError={hasError}
          className="select__input"
          label={label}
          onChange={onSearch}
          required={isRequiredField}
          leftIconProps={leftIconProps}
          rightIconProps={{
            Component: isOpen ? IconCaretUpFilled : IconCaretDownFilled,
            size: 'xsmall'
          }}
          readonly={!withSearch || options.length <= SELECTED_VISIBLE_MIN_COUNT}
          placeholder={placeHolder}
          value={selectedOption?.label}
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
          className="select__options"
          style={{
            left,
            width,
            ...(hasBottomSpace || !hasTopSpace
              ? { top: bottom }
              : { bottom: window.innerHeight - top + DROPDOWN_AND_INPUT_GAP })
          }}
          ref={setDropdownRef}
        >
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div
                data-id={`${dataId}-options-content`}
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
                      optionLeftIcon={item?.optionLeftIcon}
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
