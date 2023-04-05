import React, { useCallback, useMemo, useState } from 'react'
import ReactDOM from 'react-dom'
import { TFilterDropdownProps } from './types'
import '../../assets/styles/components/_select.scss'
import { TChangeEventType, TItemValue, TSelectOption } from '../../types/globals'
import { SelectItem } from './SelectItem'
import Input from '../Input'
import { useOnOutsideClick } from '../../hooks'
import Footer from './Footer'

const FilterDropdown = (props: TFilterDropdownProps): JSX.Element | null => {
  const {
    options,
    isOpen,
    setFieldValue,
    name,
    labelLeftIconProps,
    optionRightIconComponent,
    labelRightIconComponent,
    avatar,
    footerButtonProps = {
      confirm: {
        buttonText: 'Apply'
      },
      cancel: { buttonText: 'Cancel' }
    },
    selectedItems,
    setSelectedItems,
    closeHandler,
    parentRef
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

  const filteredOptions = useMemo(() => {
    return options.filter((option) => {
      return option.label.toString().includes(filterValue)
    })
  }, [filterValue, options])

  const removeFilterValue = () => {
    setFilterValue('')
  }

  if (!isOpen) {
    return null
  }

  return ReactDOM.createPortal(
    <div
      style={{
        background: '#efe8e8',
        maxWidth: 300,
        padding: 20,
        marginTop: 5,
        position: 'absolute'
      }}
      ref={setContainerRef}
    >
      <Input
        onChange={onFilter}
        currentValue={filterValue}
        rightIcon
        iconProps={{
          size: 'xsmall',
          name: filterValue === '' ? 'search' : 'close',
          onClick: removeFilterValue
        }}
      />
      <div className={'select__options__scroll scrollbar scrollbar--vertical '}>
        {filteredOptions.map((item: TSelectOption) => {
          const isSelected = checkIsSelected(item.value)

          return (
            <SelectItem
              data={item}
              key={item.value}
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
    </div>,
    parentRef
  )
}

export default FilterDropdown
