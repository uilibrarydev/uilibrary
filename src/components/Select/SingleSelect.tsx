import React, { useCallback, useMemo, useRef, useState } from 'react'
import { useOnOutsideClick } from '../../hooks'
import { TSingleSelectPropTypes } from './types'
import '../../assets/styles/components/_select.scss'
import { OptionItem } from '../../helperComponents/OptionItem'
// import Footer from './Footer'
import Input from '../Input'
import { useGetElemSizes } from '../../hooks/useGetElemSizes'
import { Loading } from './SharedComponents/Loading'
import classNames from 'classnames'

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
    isRequiredField,
    labelLeftIconProps,
    labelRightIconComponent,
    optionRightIconComponent
  } = props

  const [isOpen, setIsOpen] = useState(false)
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)

  const currentSelection = (value as TItemValue) || selectedItem || null

  const closeDropdown = () => setIsOpen(false)
  const openDropdown = () => setIsOpen(true)

  useOnOutsideClick(containerRef, closeDropdown)

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
    const selected = options.find((item) => item.value === currentValue)
    return selected?.label.toString() || ''
  }, [options, value, currentSelection])

  const clickHandler =
    (isSelected: boolean) =>
    ({ value }: TSelectedValue) => {
      if (!isSelected) {
        onItemSelect(value)
        return
      }
      if (!isRequiredField) {
        onItemDeselect()
      }
    }

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
          required={isRequiredField}
          rightIconProps={{
            name: isOpen ? 'caret-up' : 'caret-down'
          }}
          placeholder={placeHolder}
          currentValue={selectedItemLabel}
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
                {options.map((item: TSelectOption) => {
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
