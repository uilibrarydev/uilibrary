import React, { useCallback, useMemo, useRef, useState } from 'react'
import { useOnOutsideClick } from '../../hooks'
import { TSingleSelectPropTypes } from './types'
import '../../assets/styles/components/_select.scss'
import { OptionItem } from '../../helperComponents/OptionItem'
import Input from '../Input'
import { useGetElemSizes } from '../../hooks/useGetElemSizes'
import { Loading } from './SharedComponents'
import classNames from 'classnames'
import { ContentTop } from './SharedComponents'
import { SELECTED_VISIBLE_MIN_COUNT } from './MultiSelect/consts'

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
    withSearch = false,
    isRequiredField,
    labelLeftIconProps,
    labelRightIconComponent,
    optionRightIconComponent
  } = props

  const [isOpen, setIsOpen] = useState(false)
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)
  const [searchValue, setSearchValue] = useState('')
  const [itemLabe, setItemLabel] = useState<string>('')
  const currentSelection = (value as TItemValue) || selectedItem || null
  const closeDropdown = () => setIsOpen(false)
  const openDropdown = () => setIsOpen(true)

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

  const onItemSelect = useCallback((value: TItemValue) => {
    if (setSelectedItem) {
      setSelectedItem(value)
    }
    if (name && setFieldValue) {
      setFieldValue(name, value)
    }

    closeDropdown()
  }, [])

  const onItemDeselect = useCallback(() => onItemSelect(null), [])

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

  const selectedItemLabel = useMemo(() => {
    const currentValue = value || currentSelection
    if(searchValue){
      return null
    }else{
      const selected = options.find((item) => item.value === currentValue)
      return selected?.label.toString() || ''
    }

  }, [options, value, currentSelection,searchValue])

  const clickHandler =
    (isSelected: boolean) =>
    ({ value }: TSelectedValue) => {
    setSearchValue('')

      console.log(value)
      if (!isSelected) {
        onItemSelect(value)
        return
      }
      if (!isRequiredField) {
        onItemDeselect()
      }
    }

  const onSearch = (e: TChangeEventType) => {
    setSearchValue(e.target.value)
  }
  console.log(searchValue,'searchValue')
  const removeFilter = () => setSearchValue('')


  const scrollRef = useRef(null)
  const { scrollHeight } = useGetElemSizes(scrollRef.current)

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
          placeholder={placeHolder}
          // value={selectedItemLabel}
          // currentValue={selectedItemLabel}
          isValid={isValid}
          disabled={disabled}
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
                {/*<ContentTop*/}
                {/*  isSearchAvailable={options.length > SELECTED_VISIBLE_MIN_COUNT}*/}
                {/*  isSelectAllDisabled={filteredData.length === 0}*/}
                {/*  setSearchValue={setSearchValue}*/}
                {/*  searchValue={searchValue}*/}
                {/*/>*/}

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
