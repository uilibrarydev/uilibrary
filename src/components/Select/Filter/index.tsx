import React, { useCallback, useState } from 'react'
import ReactDOM from 'react-dom'

import { TChangeEventType, TItemValue, TSelectGroupOptions } from '../../../types/globals'
import { useOnOutsideClick } from '../../../hooks'
import { TSelectOptions } from '../../../types/globals'
import Input from '../../Input'

import { FilterDropdownContent } from './FilterDropdown'
import { FilterGroupDropdownContent } from './FilterGroupDropdown'
import Footer from '../Footer'

import '../../../assets/styles/components/_select.scss'
import { TFilterProps } from '../types'
import { Loading } from '../Loading'

export const Filter = (props: TFilterProps): JSX.Element | null => {
  const {
    isLoading,
    isGrouped,
    options,
    isOpen,
    setFieldValue,
    name,
    footerButtonProps = {
      confirm: {
        buttonText: 'Apply'
      },
      cancel: { buttonText: 'Cancel' }
    },
    selectedItems,
    setSelectedItems,
    closeHandler,
    parentRef,
    ...rest
  } = props

  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)
  const [selectedValues, setSelectedValues] = useState<TItemValue[]>(selectedItems)
  const [filterValue, setFilterValue] = useState('')

  useOnOutsideClick(containerRef, closeHandler)

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

    closeHandler()
  }

  const checkIsSelected = (itemValue: TItemValue) => {
    return selectedValues.find((item) => item === itemValue) !== undefined
  }

  const applySelectedItems = useCallback(() => {
    submitSelectedValue(selectedValues)
    closeHandler()
  }, [selectedValues])

  const cancelCelectedItems = () => {
    submitSelectedValue(selectedItems)
    setSelectedValues(selectedItems)
    closeHandler()
  }

  const onItemDeselect = (item: TItemValue) => {
    setSelectedValues((selected) =>
      selected.filter((optionValue: TItemValue) => optionValue !== item)
    )
  }

  const onFilter = (e: TChangeEventType) => {
    e.preventDefault()
    e.stopPropagation()
    setFilterValue(e.target.value)
  }

  const removeFilterValue = () => {
    setFilterValue('')
  }

  if (!isOpen) {
    return null
  }

  return ReactDOM.createPortal(
    <div className="select filter">
      <div className="select__options" ref={setContainerRef}>
        <Input
          onChange={onFilter}
          className="filter__input"
          size="small"
          currentValue={filterValue}
          rightIconProps={{
            size: filterValue === '' ? 'small' : 'xsmall',
            name: filterValue === '' ? 'search' : 'close',
            onClick: removeFilterValue
          }}
        />
        <div className={'select__options__scroll scrollbar scrollbar--vertical '}>
          {isLoading ? (
            <Loading />
          ) : isGrouped ? (
            <FilterGroupDropdownContent
              checkIsSelected={checkIsSelected}
              onItemDeselect={onItemDeselect}
              filterValue={filterValue}
              onItemSelect={onItemSelect}
              options={options as TSelectGroupOptions}
              {...rest}
            />
          ) : (
            <FilterDropdownContent
              checkIsSelected={checkIsSelected}
              onItemDeselect={onItemDeselect}
              filterValue={filterValue}
              onItemSelect={onItemSelect}
              options={options as TSelectOptions}
              {...rest}
            />
          )}
        </div>
        {isLoading ? null : (
          <Footer
            buttonProps={footerButtonProps}
            onCancel={cancelCelectedItems}
            onApply={applySelectedItems}
          />
        )}
      </div>
    </div>,
    parentRef
  )
}
