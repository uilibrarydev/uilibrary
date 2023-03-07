import React, { useMemo, useRef, useState } from 'react'
import { useOnOutsideClick } from '../../hooks'
import { TSelectPropTypes } from './types'
import './index.scss'
import { SelectItem } from './SelectItem'
import { TChangeEventType, TClickEventType, TItemValue, TSelectOption } from '../../types/globals'
import Input from '../Input'

const Select = (props: TSelectPropTypes): JSX.Element | null => {
  const {
    options,
    placeHolder,
    value,
    label,
    selectedValue = null,
    onSelect,
    setFieldValue,
    name,
    required,
    multiSelect = false,
    leftIconProps,
    rightIconProps,
    avatar,
    withSearch,
    withFooter
  } = props

  const [isOpen, setIsOpen] = useState(true)
  const [filterValue, setFilterValue] = useState('')

  const onFilterChange = (e: TChangeEventType) => {
    const result = e.target.value
    setFilterValue(result)
  }

  const ref = useRef(null)

  const closeDropdown = () => setIsOpen(false)

  const close = () => setIsOpen(false)

  useOnOutsideClick(ref, closeDropdown)

  const onItemSelect = (item: TItemValue) => {
    if (onSelect) {
      onSelect(item)
    }
    if (name && setFieldValue) {
      setFieldValue(name, item, { shouldValidate: true })
    }
    closeDropdown()
  }

  const open = (e?: TClickEventType) => {
    const result = e?.target as HTMLDivElement
    if (e && result.className && result.className.indexOf('icon-') !== -1) {
      setIsOpen(!isOpen)
      e.preventDefault()
      return
    } else {
      setIsOpen(true)
    }
  }

  const currentvalue = value || selectedValue

  const filteredOptions = useMemo(() => {
    return options.filter((item) => item.label.toString().indexOf(filterValue) !== -1)
  }, [filterValue, options])

  const selectedItemLabel = useMemo(() => {
    const selectedItem = filteredOptions.find((item) => item.value === currentvalue)
    return selectedItem?.label.toString() || ''
  }, [filteredOptions, currentvalue])

  return (
    <div className="select-container" ref={ref}>
      <div className="input_container" onClick={open}>
        <Input
          label={label}
          required={required}
          rightIcon
          placeholder={placeHolder}
          onChange={onFilterChange}
          iconProps={{
            name: isOpen ? 'arrow-up' : 'arrow-down',
            onClick: isOpen ? close : open
          }}
          currentValue={selectedItemLabel}
        />
      </div>

      {isOpen && (
        <div className="select-options-wrapper">
          {filteredOptions.map((item: TSelectOption) => {
            return (
              <SelectItem
                data={item}
                key={item.value}
                onClick={onItemSelect}
                leftIconProps={leftIconProps}
                rightIconProps={rightIconProps}
                avatar={avatar}
                isSelected={selectedValue === item.value}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Select
