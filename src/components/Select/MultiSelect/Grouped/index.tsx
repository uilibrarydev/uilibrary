import React, { useCallback, useMemo, useState } from 'react'
import Text from '../../../Text'
import Icon from '../../../Icon'
import Divider from '../../../Divider'
import Empty from '../../../Empty'

import { useGetElemSizes } from '../../../../hooks'
import { OptionItem } from '../../../../helperComponents'

import { ContentTop, Loading } from '../../SharedComponents'
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
    containerStyles,
    onItemDeselect,
    setSelectedValues,
    isSearchAvailable,
    labelLeftIconProps,
    optionRightIconComponent,
    labelRightIconComponent,
    maxSelectCount
  } = props

  const { emptyListMainMessage, emptyListSecondaryMessage } = translations

  const [searchValue, setSearchValue] = useState('')
  const [activeGroupId, setActiveGroupId] = useState<number | null>(0)
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
  }, [searchValue, options])

  const clearAll = useCallback(() => {
    setAllSelected(false)
    setSelectedValues([])
  }, [])

  const selectAll = useCallback(() => {
    setAllSelected(true)

    const allValues = filteredData.reduce(
      (acc: TSelectedValue[], { data }: TSelectGroupOption) => [
        ...acc,
        ...data.map((item) => {
          return {
            value: item.value,
            label: item.label
          }
        })
      ],
      []
    )

    setSelectedValues(allValues)
  }, [filteredData])

  const selectedOptions = useMemo(() => {
    return options.reduce((acc: TSelectOption[], option: TSelectGroupOption) => {
      const { data } = option
      const selectedItems = data.filter(
        (item: TSelectOption) => selectedValues.findIndex((s) => s.value === item.value) !== -1
      )
      return [...acc, ...selectedItems]
    }, [])
  }, [options, selectedValues])

  const onDeselect = (item: TSelectedValue) => {
    setAllSelected(false)
    onItemDeselect(item)
  }

  const onGroupClick = (index: number) => {
    if (activeGroupId == index) {
      setActiveGroupId(null)
      return
    }
    setActiveGroupId(index)
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
  const hasTopContent = isSearchAvailable || helperText

  return (
    <>
      {isOpen && (
        <div className="select__options" style={containerStyles}>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {hasTopContent ? (
                <ContentTop
                  isSearchAvailable={isSearchAvailable}
                  hasLimitation={!!maxSelectCount}
                  selectAll={selectAll}
                  clearAll={clearAll}
                  isAnySelected={selectedValues.length !== 0}
                  helperText={helperText}
                  isSelectAllDisabled={isAllSelected || filteredData.length === 0}
                  setSearchValue={setSearchValue}
                  searchValue={searchValue}
                  translations={translations}
                />
              ) : null}
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
                  {hasTopContent ? <Divider type="primary" isHorizontal /> : null}
                  {filteredData.map(({ title, data }: TSelectGroupOption, index: number) => {
                    const isActive = index === activeGroupId
                    return (
                      <div className="select__group group-item" key={title}>
                        <div onClick={() => onGroupClick(index)} className="group-item__top">
                          <Text size="xxsmall" type="tertiary" className="group-item__title pr-4">
                            {title}
                          </Text>
                          <Icon
                            size="xxsmall"
                            name={isActive ? 'caret-up-hover' : 'caret-down-hover'}
                            className="group-item__icon"
                          />
                        </div>
                        {isActive &&
                          data.map((item: TSelectOption) => {
                            const isSelected =
                              selectedValues.findIndex((s) => s.value === item.value) !== -1
                            return (
                              <OptionItem
                                data={item}
                                key={item.value}
                                isSelected={isSelected}
                                disabled={
                                  item.disabled ||
                                  (!isSelected && selectedValues.length === maxSelectCount)
                                }
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
                <Empty
                  size="small"
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
