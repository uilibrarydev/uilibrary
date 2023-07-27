import React, { useCallback, useMemo, useState } from 'react'

import { useGetElemSizes } from '../../../hooks/useGetElemSizes'

import Input from '../../Input'
import Checkbox from '../../Checkbox'

import { DROPDOWN_MAX_HEIGHT, incrementOverflowedinitial } from '../utils'

import { OptionItem } from '../../../helperComponents/OptionItem'
import { TMultiSelectPropTypes } from '../types'
import '../../../assets/styles/components/_select.scss'
import { Loading } from '../Loading'

export const MultiSelect = (props: TMultiSelectPropTypes): JSX.Element | null => {
  const {
    isLoading,
    options,
    placeHolder,
    label,
    isRequiredField,
    labelLeftIconProps,
    optionRightIconComponent,
    labelRightIconComponent,
    avatar,
    selectedValues,
    setSelectedValues,
    isOpen,
    toggleDropdown,
    checkIsValueOverflowed,
    selectButtonTexts,
    onItemDeselect,
    onItemSelect,
    footer
  } = props

  const [contentContainerRef, setContentContainerRef] = useState<HTMLDivElement | null>(null)

  const { scrollHeight } = useGetElemSizes(contentContainerRef)

  const selectedItemsLabels = useMemo(() => {
    const currentValue = options.reduce(
      (acc: { inputValue: string; visibleOptionsLength: number }, item: TSelectOption) => {
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
          readonly={true}
        />
      </div>

      {isOpen && (
        <div className="select__options">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div className="select__top">
                <Checkbox
                  IconProps={{ name: 'minus' }}
                  value={isAnyItemSelected}
                  onClick={isAnyItemSelected ? clearAll : selectAll}
                  label={
                    isAnyItemSelected ? selectButtonTexts.clearAll : selectButtonTexts.selectAll
                  }
                />
              </div>

              <div
                ref={setContentContainerRef}
                className={`select__options__scroll scrollbar scrollbar--vertical ${
                  scrollHeight > DROPDOWN_MAX_HEIGHT ? 'mr-6' : ''
                }`}
              >
                {options.map((item: TSelectOption) => {
                  const isSelected = checkIsSelected(item.value)

                  return (
                    <OptionItem
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
              {footer}
            </>
          )}
        </div>
      )}
    </>
  )
}
