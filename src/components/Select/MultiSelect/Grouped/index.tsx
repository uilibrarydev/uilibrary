import React, { useCallback, useMemo, useState } from 'react'
import { Text, Icon, Divider } from '../../../index'

import { useGetElemSizes } from '../../../../hooks/useGetElemSizes'
import { OptionItem } from '../../../../helperComponents/OptionItem'

import { ContentTop, NoResult, Loading } from '../../SharedComponents'
import { DROPDOWN_MAX_HEIGHT } from '../consts'

import { TMultiSelectGroupedProps } from '../../types'
import '../../../../assets/styles/components/_select.scss'
import './index.scss'

export const MultiSelectGrouped = (props: TMultiSelectGroupedProps): JSX.Element | null => {
  const {
    isOpen,
    footer,
    avatar,
    options,
    isLoading,
    helperText,
    translations,
    selectedValues,
    onItemSelect,
    onItemDeselect,
    setSelectedValues,
    isSearchAvailable,
    labelLeftIconProps,
    optionRightIconComponent,
    labelRightIconComponent
  } = props

  const { emptyListMainMessage, emptyListSecondaryMessage } = translations

  const [searchValue, setSearchValue] = useState('')
  const [activeGroupId, setActiveGroupId] = useState(0)
  const [isAllSelected, setAllSelected] = useState(false)
  const [contentContainerRef, setContentContainerRef] = useState<HTMLDivElement | null>(null)

  const { scrollHeight } = useGetElemSizes(contentContainerRef)

  const filteredData = useMemo(() => {
    if (!searchValue) {
      return options
    }

    const filtered = options.reduce(
      (acc: TSelectGroupOptions, group: TSelectGroupOption): TSelectGroupOptions => {
        const { data, title } = group
        const groupData = data.filter((dataItem) => {
          return typeof dataItem.label === 'string' && dataItem.label.includes(searchValue)
        })

        if (groupData.length) {
          return [
            ...acc,
            {
              title,
              data: groupData
            }
          ]
        }
        return acc
      },
      []
    )

    return filtered
  }, [searchValue, options, activeGroupId])

  const clearAll = useCallback(() => {
    setAllSelected(false)
    setSelectedValues([])
  }, [])

  const selectAll = useCallback(() => {
    setAllSelected(true)
    const allValues = options.reduce(
      (acc: TItemValue[], { data }: TSelectGroupOption) => [
        ...acc,
        ...data.map((item) => item.value)
      ],
      []
    )

    setSelectedValues(allValues)
  }, [filteredData])

  const selectedOptions = useMemo(() => {
    return options.reduce((acc: TSelectOption[], option: TSelectGroupOption) => {
      const { data } = option
      const selectedItems = data.filter(
        (item: TSelectOption) => selectedValues.indexOf(item.value) !== -1
      )
      return [...acc, ...selectedItems]
    }, [])
  }, [options, selectedValues])

  const onDeselect = (item: TItemValue) => {
    setAllSelected(false)
    onItemDeselect(item)
  }

  const optionProps = useMemo(() => {
    return {
      isCheckbox: true,
      avatar,
      labelLeftIconProps,
      optionRightIconComponent,
      labelRightIconComponent,
      className: 'group-item__option'
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
                <div>
                  {isSearchAvailable && (
                    <div className="selected-items">
                      {selectedOptions.map((selectedItem: TSelectOption) => {
                        return (
                          <OptionItem
                            isSelected
                            data={selectedItem}
                            key={selectedItem.value}
                            onClick={onDeselect}
                            disabled={selectedItem.disabled}
                            {...optionProps}
                          />
                        )
                      })}
                    </div>
                  )}
                  <Divider type="primary" isHorizontal />
                  {filteredData.map(({ title, data }: TSelectGroupOption, index: number) => {
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
                            const isSelected = selectedValues.indexOf(item.value) !== -1
                            return (
                              <OptionItem
                                data={item}
                                key={item.value}
                                isSelected={isSelected}
                                disabled={item.disabled}
                                onClick={isSelected ? onDeselect : onItemSelect}
                                {...optionProps}
                              />
                            )
                          })}
                      </div>
                    )
                  })}
                </div>
              </div>
              {filteredData.length === 0 ? (
                <NoResult
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
