import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import classNames from 'classnames'
import { useOnOutsideClick } from '../../hooks'
import { useGetElemSizes } from '../../hooks/useGetElemSizes'

import { OptionItem } from '../../helperComponents/OptionItem'
import { Text, Input } from '../../index'

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
    disabled,
    dataId = '',
    placeHolder,
    selectedItem,
    setFieldValue,
    setSelectedItem,
    outerHelperText,
    innerHelperText,
    isRequiredField,
    labelLeftIconProps,
    labelRightIconComponent,
    optionRightIconComponent
  } = props
  const scrollRef = useRef(null)
  const { scrollHeight } = useGetElemSizes(scrollRef.current)
  const [isOpen, setIsOpen] = useState(false)
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)
  const [searchValue, setSearchValue] = useState('')
  const currentSelection = (value as TItemValue) || selectedItem || null


  const [itemLabel, setItemLabel] = useState<string | null>('')

  useEffect(() => {
    const label = options.find((item) => item.value === currentSelection);
    setItemLabel(label?.label.toString() || '')
  }, [currentSelection]);


  const openDropdown = () => setIsOpen(true)
  const closeDropdown = () => setIsOpen(false)

  useOnOutsideClick(containerRef, closeDropdown)

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

  const open = (e?: TClickEventType) => {
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


  // const selectedItemLabel = useMemo(() => {
  //   const currentValue = value || currentSelection;
  //   const selected = options.find((item) => item.value === currentValue)
  //   return selected?.label.toString() || ''
  // }, [options, value, currentSelection])
  const onSearch = (e: TChangeEventType) => {
    setItemLabel(null)
    setSearchValue(e.target.value)
  }

  return (
    <div className={classNames(`select select--${size}`, className)} ref={setContainerRef}>
      <div onClick={open}>
        <Input
          size={size}
          data-id={dataId}
          hasError={hasError}
          className="select__input"
          label={label}
          onChange={onSearch}
          required={isRequiredField}
          rightIconProps={{
            name: isOpen ? 'caret-up' : 'caret-down'
          }}
          readonly={options.length <= SELECTED_VISIBLE_MIN_COUNT}
          placeholder={placeHolder}
          value={itemLabel}
            // currentValue={selectedItemLabel as any}
          isValid={isValid}
          disabled={disabled}
          helperText={isOpen ? '' : outerHelperText}
        />
      </div>

      {isOpen && (
        <div className="select__options">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div
                ref={scrollRef}
                className={`select__options__scroll scrollbar scrollbar--vertical  ${
                  scrollHeight > 372 ? 'mr-6' : ''
                }`}
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
                      data={item}
                      key={item.value}
                      onClick={clickHandler(isSelected)}
                      labelLeftIconProps={labelLeftIconProps}
                      optionRightIconComponent={optionRightIconComponent}
                      labelRightIconComponent={labelRightIconComponent}
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
