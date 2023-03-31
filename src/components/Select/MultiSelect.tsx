import React, { useCallback, useMemo, useRef, useState } from 'react'
import { useOnOutsideClick } from '../../hooks'
import { getStringWidth } from '../../utils'
import { useGetElemSizes } from '../../hooks/useGetElemSizes'
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
    optionRightIconComponent,
    labelRightIconComponent,
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

  const [isOpen, setIsOpen] = useState(false)

  const [selectedValues, setSelectedValues] = useState<TItemValue[]>(selectedItems)
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)
  const { width } = useGetElemSizes(containerRef)

  const closeDropdown = () => setIsOpen(false)
  const openDropdown = () => setIsOpen(true)
  useOnOutsideClick(containerRef, closeDropdown)

  const checkIsValueOverflowed = useCallback(
    (value: string) => {
      const elemWidth = getStringWidth(value, 14)
      return elemWidth > width - 80 // padding and width of (+number)
    },
    [width]
  )

  const onItemSelect = useCallback((item: TItemValue) => {
    setSelectedValues((selected) => [...selected, item])
  }, [])

  const submitSelectedValue = (selections: TItemValue[]) => {
    if (setSelectedItems) {
      setSelectedItems(selections)
    }
    if (name && setFieldValue) {
      setFieldValue(name, selections, { shouldValidate: true })
    }

    closeDropdown()
  }

  const applySelectedItems = useCallback(() => {
    submitSelectedValue(selectedValues)
    closeDropdown()
  }, [selectedValues])

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
    const currentValue = options.reduce(
      (acc: { inputValue: string; visibleOptionsLength: number }, item: TSelectOption) => {
        if (selectedValues.indexOf(item.value) !== -1) {
          const { inputValue, visibleOptionsLength } = acc
          const accNextValue = `${inputValue}${inputValue !== '' ? ', ' : ''}${item.label}`
          const isOverflowed = checkIsValueOverflowed(accNextValue)

          if (isOverflowed) {
            acc.inputValue = `${inputValue} ... +${selectedValues.length - visibleOptionsLength}`

            return acc
          }
          acc = { inputValue: accNextValue, visibleOptionsLength: visibleOptionsLength + 1 }
        }
        return acc
      },
      { inputValue: '', visibleOptionsLength: 0 }
    )

    return currentValue.inputValue
  }, [options, selectedValues, checkIsValueOverflowed])

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

  const scrollRef = useRef(null)
  const { scrollHeight } = useGetElemSizes(scrollRef.current)

  return (
    <div className="select" ref={setContainerRef}>
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

          <div
            ref={scrollRef}
            className={`select__options__scroll scrollbar scrollbar--vertical ${
              scrollHeight > 260 ? 'mr-6' : ''
            }`}
          >
            {options.map((item: TSelectOption) => {
              const isSelected = checkIsSelected(item.value)
              return (
                <SelectItem
                  data={item}
                  key={item.value}
                  isCheckbox
                  onClick={isSelected ? onItemDeselect : onItemSelect}
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
