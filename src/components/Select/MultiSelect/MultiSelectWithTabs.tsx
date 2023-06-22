import React, { useCallback, useMemo, useState } from 'react'

import Tab from '../../Tab'
import Input from '../../Input'
import Checkbox from '../../Checkbox'
import { useGetElemSizes } from '../../../hooks/useGetElemSizes'
import { TItemValue, TSelectGroupOption, TSelectOption } from '../../../types/globals'

import { OptionItem } from '../../../helperComponents/OptionItem'

import { incrementOverflowedinitial, DROPDOWN_MAX_HEIGHT } from '../utils'
import { TMultiSelectGroupedProps } from '../types'
import '../../../assets/styles/components/_select.scss'
import { Loading } from '../Loading'

export const MultiSelectWithTabs = (props: TMultiSelectGroupedProps): JSX.Element => {
  const {
    isLoading,
    isOpen,
    footer,
    label,
    avatar,
    options,
    placeHolder,
    selectedValues,
    isRequiredField,
    onItemSelect,
    onItemDeselect,
    toggleDropdown,
    setSelectedValues,
    checkIsValueOverflowed,
    selectButtonTexts,
    labelLeftIconProps,
    optionRightIconComponent,
    labelRightIconComponent
  } = props

  const [contentContainerRef, setContentContainerRef] = useState<HTMLDivElement | null>(null)

  const [activeTab, setActiveTab] = useState<number>(0)
  const { scrollHeight } = useGetElemSizes(contentContainerRef)

  const currentTabData = options[activeTab].data

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
    const filteredValues = selectedValues.filter((value: TItemValue) => {
      const currentTabValues = currentTabData.map((item) => item.value)
      return currentTabValues.indexOf(value) === -1
    })

    setSelectedValues(filteredValues)
  }, [selectedValues, activeTab, currentTabData])

  const selectAll = useCallback(() => {
    const allValues = currentTabData.map((item: TSelectOption) => item.value)
    setSelectedValues(selectedValues.concat(allValues))
  }, [currentTabData, activeTab, selectedValues])

  const checkIsSelected = (itemValue: TItemValue) => {
    return selectedValues.find((item) => item === itemValue) !== undefined
  }

  const isAnyItemSelectedInCurrentTab = useMemo(() => {
    const selectedItem = currentTabData.find(
      (option: TSelectOption) => selectedValues.indexOf(option.value) !== -1
    )
    return !!selectedItem
  }, [activeTab, currentTabData, selectedValues])

  const tabs = useMemo(() => {
    return options.map((option: TSelectGroupOption, index: number) => {
      return { label: option.title, value: index }
    })
  }, [options])

  const onTabSelect = (selected: number | string) => setActiveTab(selected as number)

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
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div className="tab_container" style={{ padding: '0 20px', width: '100%' }}>
                {
                  <Tab
                    selectedValue={activeTab}
                    tabItems={tabs}
                    onSelect={onTabSelect}
                    size="small"
                  />
                }
              </div>
              <div className="select__top">
                <Checkbox
                  IconProps={{ name: 'minus' }}
                  value={isAnyItemSelectedInCurrentTab}
                  onClick={isAnyItemSelectedInCurrentTab ? clearAll : selectAll}
                  label={
                    isAnyItemSelectedInCurrentTab
                      ? selectButtonTexts.clearAll
                      : selectButtonTexts.selectAll
                  }
                />
              </div>
              <div
                ref={setContentContainerRef}
                className={`select__options__scroll scrollbar scrollbar--vertical ${
                  scrollHeight > DROPDOWN_MAX_HEIGHT ? 'mr-6' : ''
                }`}
              >
                {currentTabData.map((item: TSelectOption) => {
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
