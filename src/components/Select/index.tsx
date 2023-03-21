import React, { useCallback, useMemo, useRef, useState } from 'react'
import { useOnOutsideClick } from '../../hooks'
import { TSelectPropTypes } from './types'
import '../../assets/styles/components/_select.scss'
import { SelectItem } from './SelectItem'
import { SelectButtons } from './SelectButtons'
import Footer from './Footer'
import { TChangeEventType, TClickEventType, TItemValue, TSelectOption } from '../../types/globals'
import Input from '../Input'
import { noop } from '../../utils'

const Select = (props: TSelectPropTypes): JSX.Element | null => {
  const {
    options,
    placeHolder,
    value,
    label,

    setFieldValue,
    name,
    required,
    multiSelect = false,
    leftIconProps,
    rightIconProps,
    avatar,
    withSearch,
    withFooter,
    isOptionDisabled,
    buttonProps = {
      confirm: {
        buttonText: 'Apply'
      },
      cancel: { buttonText: 'Cancel' }
    },
    selectedItems,
    setSelectedItems
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
    const selected = multiSelect ? [...selectedItems, item] : [item]

    if (setSelectedItems) {
      setSelectedItems(selected)
    }
    if (name && setFieldValue) {
      setFieldValue(name, item, { shouldValidate: true })
    }
    if (!multiSelect) {
      closeDropdown()
    }
  }
  const onItemDeselect = (item: TItemValue) => {
    const selected = selectedItems.filter((optionValue: TItemValue) => optionValue !== item)

    if (setSelectedItems) {
      setSelectedItems(selected)
    }
    if (name && setFieldValue) {
      setFieldValue(name, item, { shouldValidate: true })
    }
    if (!multiSelect) {
      closeDropdown()
    }
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

  const selectedItemsLabels = useMemo(() => {
    return options.reduce((acc: string, item: TSelectOption) => {
      if (selectedItems.indexOf(item.value) !== -1) {
        acc = `${acc}${acc !== '' ? ', ' : ''}${item.label}`
      }
      return acc
    }, '')
  }, [options, selectedItems])

  const filteredOptions = useMemo(() => {
    return options.filter((item) => item.label.toString().indexOf(filterValue) !== -1)
  }, [filterValue, options])

  const selectedItemLabel = useMemo(() => {
    if (multiSelect) {
      return selectedItemsLabels // TODO finish this component
    }
    const currentValue = value || selectedItems[0]
    const selectedItem = filteredOptions.find((item) => item.value === currentValue)
    return selectedItem?.label.toString() || ''
  }, [filteredOptions, multiSelect, selectedItemsLabels])

  const clearAll = useCallback(() => {
    setSelectedItems([])
  }, [])

  const selectAll = useCallback(() => {
    const allValues = options.map((item: TSelectOption) => item.value)
    setSelectedItems(allValues)
  }, [options])

  const checkIsSelected = (itemValue: TItemValue) => {
    return selectedItems.indexOf(itemValue) !== -1
  }

  return (
    <div className="select" ref={ref}>
      <div onClick={open}>
        <Input
          className="select__input"
          label={label}
          required={required}
          rightIcon
          placeholder={placeHolder}
          onChange={onFilterChange}
          iconProps={{
            name: isOpen ? 'caret-up' : 'caret-down',
            onClick: isOpen ? close : open
          }}
          currentValue={selectedItemLabel}
        />
      </div>

      {isOpen && (
        <div className="select__options">
          {multiSelect ? <SelectButtons selectAll={selectAll} clearAll={clearAll} /> : null}
          {filteredOptions.map((item: TSelectOption) => {
            const isSelected = checkIsSelected(item.value)
            return (
              <SelectItem
                data={item}
                key={item.value}
                isCheckbox={multiSelect}
                onClick={isSelected ? onItemDeselect : onItemSelect}
                leftIconProps={leftIconProps}
                rightIconProps={rightIconProps}
                avatar={avatar}
                disabled={isOptionDisabled}
                isSelected={isSelected}
              />
            )
          })}
          {withFooter ? <Footer buttonProps={buttonProps} onCancel={noop} onApply={noop} /> : null}
        </div>
      )}
    </div>
  )
}

export default Select
