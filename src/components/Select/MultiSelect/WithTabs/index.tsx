import React, { useCallback, useMemo, useState } from 'react'
import { Tab, Divider, Empty } from '../../../index'

import { useGetElemSizes } from '../../../../hooks/useGetElemSizes'
import { OptionItem } from '../../../../helperComponents/OptionItem'

import { DROPDOWN_MAX_HEIGHT } from '../consts'
import { ContentTop, Loading } from '../../SharedComponents'

import { TMultiSelectGroupedProps } from '../../types'
import '../../../../assets/styles/components/_select.scss'

export const MultiSelectWithTabs = (props: TMultiSelectGroupedProps): JSX.Element => {
  const {
    isLoading,
    isOpen,
    footer,
    avatar,
    options,
    selectedValues,
    onItemSelect,
    onItemDeselect,
    setSelectedValues,
    labelLeftIconProps,
    optionRightIconComponent,
    labelRightIconComponent,
    helperText,
    translations,
    isSearchAvailable,
    maxSelectCount
  } = props

  const { emptyListMainMessage, emptyListSecondaryMessage } = translations
  const [contentContainerRef, setContentContainerRef] = useState<HTMLDivElement | null>(null)

  const [activeTab, setActiveTab] = useState<number>(0)
  const { scrollHeight } = useGetElemSizes(contentContainerRef)
  const [isAllSelected, setAllSelected] = useState(false)

  const [searchValue, setSearchValue] = useState('')

  const currentTabData = options[activeTab].data

  const filteredData = useMemo(() => {
    if (!searchValue) {
      return currentTabData
    }

    return currentTabData.filter((dataItem) => {
      return typeof dataItem.label === 'string' && dataItem.label.includes(searchValue)
    })
  }, [searchValue, currentTabData])

  const clearAll = useCallback(() => {
    setAllSelected(false)
    const filteredValues = selectedValues.filter((selectedItem: TSelectedValue) => {
      const currentTabValues = currentTabData.map((item) => item.value)
      return currentTabValues.indexOf(selectedItem.value) === -1
    })

    setSelectedValues(filteredValues)
  }, [selectedValues, activeTab, currentTabData])

  const onDeselect = (item: TSelectedValue) => {
    setAllSelected(false)
    onItemDeselect(item)
  }

  const selectAll = useCallback(() => {
    setAllSelected(true)
    const allValues = filteredData.map((item: TSelectOption) => {
      const { value, label } = item
      return { value, label }
    })
    setSelectedValues(selectedValues.concat(allValues))
  }, [activeTab, selectedValues, filteredData])

  const tabs = useMemo(() => {
    return options.map((option: TSelectGroupOption, index: number) => {
      return { label: option.title, value: index }
    })
  }, [options])

  const onTabSelect = (selected: number | string) => {
    setActiveTab(selected as number)
    setSearchValue('')
  }
  const selectedOptions = useMemo(() => {
    return options.reduce((acc: TSelectOption[], option: TSelectGroupOption) => {
      const { data } = option
      const selectedItems = data.filter(
        (item: TSelectOption) => selectedValues.findIndex((s) => s.value === item.value) !== -1
      )
      return [...acc, ...selectedItems]
    }, [])
  }, [options, selectedValues])

  const optionProps = useMemo(() => {
    return {
      isCheckbox: true,
      avatar,
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
              <ContentTop
                isSearchAvailable={isSearchAvailable}
                clearAll={clearAll}
                selectAll={selectAll}
                helperText={helperText}
                searchValue={searchValue}
                translations={translations}
                setSearchValue={setSearchValue}
                hasLimitation={!!maxSelectCount}
                isAnySelected={selectedValues.length === 0}
                isSelectAllDisabled={isAllSelected || filteredData.length === 0}
              />
              <div
                ref={setContentContainerRef}
                className={`select__options__scroll scrollbar scrollbar--vertical ${
                  scrollHeight > DROPDOWN_MAX_HEIGHT ? 'mr-6' : ''
                }`}
              >
                {isSearchAvailable && (
                  <div className="selected_container">
                    {selectedOptions.map((selectedItem: TSelectOption) => {
                      return (
                        <OptionItem
                          data={selectedItem}
                          key={selectedItem.value}
                          onClick={onDeselect}
                          disabled={selectedItem.disabled}
                          isSelected={true}
                          {...optionProps}
                        />
                      )
                    })}
                  </div>
                )}
                <Divider type="primary" isHorizontal />
                {filteredData.map((item: TSelectOption) => {
                  const isSelected = selectedValues.findIndex((s) => s.value === item.value) !== -1

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
                {filteredData.length === 0 ? (
                  <Empty
                    size="small"
                    mainMessage={emptyListMainMessage}
                    paragraphMessage={emptyListSecondaryMessage}
                  />
                ) : null}
              </div>
              {footer}
            </>
          )}
        </div>
      )}
    </>
  )
}
