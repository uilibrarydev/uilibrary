import React, { useCallback, useMemo, useState } from 'react'
import { useGetElemSizes } from '../../../hooks/useGetElemSizes'

import Input from '../../Input'
import Checkbox from '../../Checkbox'

import { OptionItem } from '../../../helperComponents/OptionItem'

import { incrementOverflowedinitial, DROPDOWN_MAX_HEIGHT } from '../utils'
import { TMultiSelectGroupedProps } from '../types'
import '../../../assets/styles/components/_select.scss'
import Icon from '../../Icon'
import { Loading } from '../Loading'
import Text from '../../Text'

export const MultiSelectGrouped = (props: TMultiSelectGroupedProps): JSX.Element | null => {
  const {
    isLoading,
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
  const [activeGroupId, setActiveGroupId] = useState(0)

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
                {options.map(({ title, data }: TSelectGroupOption, index: number) => {
                  const isActive = index === activeGroupId
                  return (
                    <div className="select__group group-item" key={title}>
                      <div onClick={() => setActiveGroupId(index)} className="group-item__top">
                        <Text size="xxsmall" type="tertiary" className="group-item__title pr-4">
                          {title}
                        </Text>
                        <Icon
                          size="xsmall"
                          name={isActive ? 'caret-up' : 'caret-down'}
                          className="group-item__icon"
                        />
                      </div>

                      {isActive &&
                        data.map((item: TSelectOption) => {
                          const isSelected = checkIsSelected(item.value)
                          return (
                            <OptionItem
                              className="group-item__option"
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
            </>
          )}
        </div>
      )}
    </>
  )
}
