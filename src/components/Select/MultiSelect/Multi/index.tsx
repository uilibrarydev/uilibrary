import React, { useCallback, useMemo, useState } from 'react'
import { Divider } from '../../../index'

import { useGetElemSizes } from '../../../../hooks/useGetElemSizes'

import { OptionItem } from '../../../../helperComponents/OptionItem'

import { ContentTop, Loading, NoResult } from '../../SharedComponents'

import { DROPDOWN_MAX_HEIGHT } from '../consts'
import { TMultySingleTabPropTypes } from '../../types'
import '../../../../assets/styles/components/_select.scss'

export const MultiSelect = (props: TMultySingleTabPropTypes): JSX.Element | null => {
  const {
    avatar,
    isOpen,
    footer,
    options,
    isLoading,
    helperText,
    translations,
    onItemSelect,
    onItemDeselect,
    isSearchAvailable,
    setSelectedValues,
    selectedValues,
    labelLeftIconProps,
    labelRightIconComponent,
    optionRightIconComponent,
    maxSelectCount
  } = props

  const { emptyListMainMessage, emptyListSecondaryMessage } = translations

  const [contentContainerRef, setContentContainerRef] = useState<HTMLDivElement | null>(null)

  const [searchValue, setSearchValue] = useState('')
  const [isAllSelected, setAllSelected] = useState(false)

  const { scrollHeight } = useGetElemSizes(contentContainerRef)

  const clearAll = useCallback(() => {
    setAllSelected(false)
    setSelectedValues([])
  }, [])

  const selectAll = useCallback(() => {
    setAllSelected(true)
    const allValues = options.map((item: TSelectOption) => {
      const { value, label } = item
      return { value, label }
    })

    setSelectedValues(allValues)
  }, [options])

  const onDeselect = (item: TSelectedValue) => {
    setAllSelected(false)
    onItemDeselect(item)
  }

  const checkIsSelected = (itemValue: TItemValue) => {
    return selectedValues.find((item) => item.value === itemValue) !== undefined
  }

  const filteredData = useMemo(() => {
    if (!searchValue) {
      return options
    }

    return options.filter((dataItem) => {
      return typeof dataItem.label === 'string' && dataItem.label.includes(searchValue)
    })
  }, [searchValue, options])

  const selectedOptions = useMemo(
    () =>
      options.filter(
        (item: TSelectOption) => selectedValues.findIndex((s) => s.value === item.value) !== -1
      ),
    [options, selectedValues]
  )

  const optionProps = useMemo(() => {
    return {
      avatar,
      isCheckbox: true,
      labelLeftIconProps,
      optionRightIconComponent,
      labelRightIconComponent
    }
  }, [avatar, labelLeftIconProps, optionRightIconComponent, labelRightIconComponent])

  return (
    <>
      {isOpen && (
        <div className="select__options">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <ContentTop
                selectAll={selectAll}
                clearAll={clearAll}
                isAnySelected={selectedValues.length === 0}
                helperText={helperText}
                isSelectAllDisabled={isAllSelected || filteredData.length === 0}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                translations={translations}
              />

              <div
                ref={setContentContainerRef}
                className={`select__options__scroll scrollbar scrollbar--vertical ${
                  scrollHeight > DROPDOWN_MAX_HEIGHT ? 'mr-6' : ''
                }`}
              >
                {isSearchAvailable && (
                  <div className="selected-items">
                    {selectedOptions.map((item: TSelectOption) => {
                      const isSelected =
                        selectedValues.findIndex((s) => s.value === item.value) !== -1

                      return (
                        <OptionItem
                          data={item}
                          key={item.value}
                          isSelected
                          disabled={item.disabled}
                          onClick={isSelected ? onDeselect : onItemSelect}
                          {...optionProps}
                        />
                      )
                    })}
                  </div>
                )}

                <Divider type="primary" isHorizontal />
                {filteredData.map((item: TSelectOption) => {
                  const isSelected = checkIsSelected(item.value)
                  return (
                    <OptionItem
                      data={item}
                      key={item.value}
                      onClick={isSelected ? onDeselect : onItemSelect}
                      disabled={
                        item.disabled || (!isSelected && selectedValues.length === maxSelectCount)
                      }
                      isSelected={isSelected}
                      {...optionProps}
                    />
                  )
                })}
              </div>
              {filteredData.length === 0 ? (
                <NoResult
                  type="small"
                  mainMessage={emptyListMainMessage}
                  paragraphMessage={emptyListSecondaryMessage}
                />
              ) : null}
              {footer}
            </>
          )}
        </div>
      )}
    </>
  )
}
