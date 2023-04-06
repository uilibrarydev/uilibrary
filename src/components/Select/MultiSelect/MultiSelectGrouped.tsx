import React, { useCallback, useMemo, useState } from 'react'
import { useGetElemSizes } from '../../../hooks/useGetElemSizes'
import { TItemValue, TSelectGroupOption, TSelectOption } from '../../../types/globals'

import Input from '../../Input'
import Checkbox from '../../Checkbox'

import { SelectItem } from '../SelectItem'

import { incrementOverflowedinitial, DROPDOWN_MAX_HEIGHT } from './utils'
import { TMultiSelectGroupedProps } from '../types'
import '../../../assets/styles/components/_select.scss'

export const MultiSelectGrouped = (props: TMultiSelectGroupedProps): JSX.Element | null => {
  const {
    label,
    isOpen,
    footer,
    avatar,
    options,
    placeHolder,
    selectedValues,
    isRequiredField,
    selectButtonTexts,
    labelLeftIconProps,
    optionRightIconComponent,
    labelRightIconComponent,
    onItemSelect,
    onItemDeselect,
    toggleDropdown,
    setSelectedValues,
    checkIsValueOverflowed
  } = props

  const [contentContainerRef, setContentContainerRef] = useState<HTMLDivElement | null>(null)

  const { scrollHeight } = useGetElemSizes(contentContainerRef)

  const selectedItemsLabels = useMemo(() => {
    const currentValue = options.reduce(
      (acc: { inputValue: string; visibleOptionsLength: number }, option: TSelectGroupOption) => {
        const { data } = option
        if (!data) {
          return acc
        }

        data.forEach((item) => {
          if (selectedValues.indexOf(item.value) !== -1) {
            const { inputValue, visibleOptionsLength } = acc
            const accNextValue = `${inputValue}${inputValue !== '' ? ', ' : ''}${item.label}`
            const isOverflowed = checkIsValueOverflowed(accNextValue)

            if (isOverflowed) {
              acc.inputValue = incrementOverflowedinitial(
                inputValue,
                selectedValues.length - visibleOptionsLength
              )

              return acc
            }
            acc = { inputValue: accNextValue, visibleOptionsLength: visibleOptionsLength + 1 }
          }
        })
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
    const allValues = options.reduce((acc: TItemValue[], { data }: TSelectGroupOption) => {
      acc = acc.concat(data.map((item) => acc.push(item.value)))
      return acc
    }, [])

    setSelectedValues(allValues)
  }, [options])

  const checkIsSelected = (itemValue: TItemValue) => {
    return selectedValues.find((item) => item === itemValue) !== undefined
  }

  const isAnyItemSelected = selectedValues.length > 0

  return (
    <>
      <div onClick={toggleDropdown}>
        <Input
          className="select__input"
          label={label}
          required={isRequiredField}
          rightIconProps={{ name: isOpen ? 'caret-up' : 'caret-down' }}
          placeholder={placeHolder}
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
            ref={setContentContainerRef}
            className={`select__options__scroll scrollbar scrollbar--vertical ${
              scrollHeight > DROPDOWN_MAX_HEIGHT ? 'mr-6' : ''
            }`}
          >
            {options.map(({ title, data }: TSelectGroupOption) => {
              return (
                <div className="group_container" key={title}>
                  <span>{title}</span>
                  {data.map((item: TSelectOption) => {
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
              )
            })}
          </div>
          {footer}
        </div>
      )}
    </>
  )
}
