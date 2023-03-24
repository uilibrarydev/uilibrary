import React, { useCallback, useMemo, useRef, useState } from 'react'
import { useOnOutsideClick } from '../../hooks'
import { TMultiSelectPropTypes } from './types'
import '../../assets/styles/components/_select.scss'
import { SelectItem } from './SelectItem'
import Footer from './Footer'
import { TClickEventType, TItemValue, TSelectOption } from '../../types/globals'
import Input from '../Input'
import Checkbox from '../Checkbox'

const Select = (props: TMultiSelectPropTypes): JSX.Element | null => {
  const {
    options,
    placeHolder,
    label,
    isRequiredField,
    labelLeftIconProps,
    labelRightIconProps,
    optionRightIconProps,
    avatar,
    selectButtonTexts = {
      selectAll: 'Select all',
      clearAll: 'Clear all'
    },
    footerButtonProps = {
      confirm: {
        buttonText: 'Apply'
      },
      cancel: { buttonText: 'Cancel' }
    },
    selectedItems,
    setSelectedItems,
    name,
    setFieldValue
  } = props

  const [isOpen, setIsOpen] = useState(true)

  const [selectedValues, setSelectedValues] = useState<TItemValue[]>(selectedItems)

  const ref = useRef(null)

  const closeDropdown = () => setIsOpen(false)
  const openDropdown = () => setIsOpen(true)

  useOnOutsideClick(ref, closeDropdown)

  const onItemSelect = (item: TItemValue) => {
    setSelectedValues((selected) => [...selected, item])
  }

  const submitSelectedValue = (selections: TItemValue[]) => {
    if (setSelectedItems) {
      setSelectedItems(selections)
    }
    if (name && setFieldValue) {
      setFieldValue(name, selections, { shouldValidate: true })
    }

    closeDropdown()
  }

  const applySelectedItems = () => {
    submitSelectedValue(selectedValues)
    closeDropdown()
  }

  const cancelCelectedItems = () => {
    submitSelectedValue(selectedItems)
    closeDropdown()
  }

  const onItemDeselect = (item: TItemValue) => {
    setSelectedValues((selected) =>
      selected.filter((optionValue: TItemValue) => optionValue !== item)
    )
  }

  const toggleDropdown = (e?: TClickEventType) => {
    const clickedElement = e?.target as HTMLDivElement
    if (e && clickedElement.className && clickedElement.className.indexOf('icon-') !== -1) {
      setIsOpen(!isOpen)
      e.preventDefault()
    } else {
      openDropdown()
    }
  }

  const selectedItemsLabels = useMemo(() => {
    return options.reduce((acc: string, item: TSelectOption) => {
      if (selectedValues.indexOf(item.value) !== -1) {
        acc = `${acc}${acc !== '' ? ', ' : ''}${item.label}`
      }
      return acc
    }, '')
  }, [options, selectedValues])

  const clearAll = useCallback(() => {
    setSelectedValues([])
  }, [])

  const selectAll = useCallback(() => {
    const allValues = options.map((item: TSelectOption) => item.value)
    setSelectedValues(allValues)
  }, [options])

  const checkIsSelected = (itemValue: TItemValue) => {
    return selectedValues.indexOf(itemValue) !== -1
  }

  const isAnyItemSelected = selectedValues.length > 0

  return (
    <div className="select" ref={ref}>
      <div onClick={toggleDropdown}>
        <Input
          className="select__input"
          label={label}
          required={isRequiredField}
          rightIcon
          placeholder={placeHolder}
          iconProps={{
            name: isOpen ? 'caret-up' : 'caret-down'
          }}
          currentValue={selectedItemsLabels}
        />
      </div>

      {isOpen && (
        <div className="select__options">
          <div className="select__top">
            <Checkbox
              IconProps={{ name: 'minus' }}
              value={isAnyItemSelected}
              onClick={isAnyItemSelected ? clearAll : selectAll}
              label={isAnyItemSelected ? selectButtonTexts.clearAll : selectButtonTexts.selectAll}
            />
          </div>

          {options.map((item: TSelectOption) => {
            const isSelected = checkIsSelected(item.value)
            return (
              <SelectItem
                data={item}
                key={item.value}
                isCheckbox
                onClick={isSelected ? onItemDeselect : onItemSelect}
                labelRightIconProps={labelRightIconProps}
                labelLeftIconProps={labelLeftIconProps}
                optionRightIconProps={optionRightIconProps}
                avatar={avatar}
                disabled={item.disabled}
                isSelected={isSelected}
              />
            )
          })}

          <Footer
            buttonProps={footerButtonProps}
            onCancel={cancelCelectedItems}
            onApply={applySelectedItems}
          />
        </div>
      )}
    </div>
  )
}

export default Select
