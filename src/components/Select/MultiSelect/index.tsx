import React, { useCallback, useMemo, useState } from 'react'
import { TMultiSelectTypes } from '../types'
import '../../../assets/styles/components/_select.scss'

import { MultiSelect } from './MultiSelect'
import { MultiSelectGrouped } from './MultiSelectGrouped'
import { useGetElemSizes } from '../../../hooks/useGetElemSizes'
import { useOnOutsideClick } from '../../../hooks'
import Footer from '../Footer'
import { getStringWidth } from '../../../utils'
import { MultiSelectWithTabs } from './MultiSelectWithTabs'

const Select = (props: TMultiSelectTypes): JSX.Element | null => {
  const {
    withTabs,
    isGrouped,
    options,
    selectButtonTexts,
    footerButtonProps = {
      confirm: {
        buttonText: 'Apply'
      },
      cancel: { buttonText: 'Cancel' }
    },
    selectedItems,
    setSelectedItems,
    name,
    setFieldValue,
    value,
    emptyListMessage,
    ...rest
  } = props

  const initialSelected = (value as TItemValue[]) || selectedItems || null

  const [isOpen, setIsOpen] = useState(false)
  const [selectedValues, setSelectedValues] = useState<TItemValue[]>(initialSelected)
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)

  const closeDropdown = () => setIsOpen(false)
  const openDropdown = () => setIsOpen(true)

  const { width } = useGetElemSizes(containerRef)
  const cancelCelectedItems = () => {
    submitSelectedValue(initialSelected)
    setSelectedValues(initialSelected)
    closeDropdown()
  }

  useOnOutsideClick(containerRef, cancelCelectedItems)

  const submitSelectedValue = (selections: TItemValue[]) => {
    if (setSelectedItems) {
      setSelectedItems(selections)
    }
    if (name && setFieldValue) {
      setFieldValue(name, selections, { shouldValidate: true })
    }

    closeDropdown()
  }

  const applySelectedItems = () => {
    submitSelectedValue(selectedValues)
    closeDropdown()
  }

  const footer = useMemo(() => {
    return (
      <Footer
        buttonProps={footerButtonProps}
        onCancel={cancelCelectedItems}
        onApply={applySelectedItems}
      />
    )
  }, [cancelCelectedItems, applySelectedItems])

  const checkIsValueOverflowed = useCallback(
    (value: string) => {
      const elemWidth = getStringWidth(value, 14)
      return elemWidth > width - 80 // padding and width of (+number)
    },
    [width]
  )

  const toggleDropdown = (e?: TClickEventType) => {
    const clickedElement = e?.target as HTMLDivElement
    if (e && clickedElement.className && clickedElement.className.indexOf('icon-') !== -1) {
      setIsOpen(!isOpen)
      e.preventDefault()
    } else {
      openDropdown()
    }
  }

  const onItemSelect = useCallback((item: TItemValue) => {
    setSelectedValues((selected: TItemValue[]) => [...selected, item])
  }, [])

  const onItemDeselect = (item: TItemValue) => {
    setSelectedValues((selected: TItemValue[]) =>
      selected.filter((optionValue: TItemValue) => optionValue !== item)
    )
  }

  if (!isGrouped) {
    return (
      <div className="select select--multi" ref={setContainerRef}>
        <MultiSelect
          isOpen={isOpen}
          emptyListMessage={emptyListMessage}
          onItemSelect={onItemSelect}
          onItemDeselect={onItemDeselect}
          toggleDropdown={toggleDropdown}
          checkIsValueOverflowed={checkIsValueOverflowed}
          selectButtonTexts={selectButtonTexts}
          options={options as TSelectOptions}
          selectedValues={selectedValues}
          setSelectedValues={setSelectedValues}
          footer={footer}
          {...rest}
        />
      </div>
    )
  }

  if (withTabs) {
    return (
      <div className="select select--multi" ref={setContainerRef}>
        <MultiSelectWithTabs
          isOpen={isOpen}
          emptyListMessage={emptyListMessage}
          onItemSelect={onItemSelect}
          onItemDeselect={onItemDeselect}
          toggleDropdown={toggleDropdown}
          checkIsValueOverflowed={checkIsValueOverflowed}
          selectButtonTexts={selectButtonTexts}
          options={options as TSelectGroupOptions}
          selectedValues={selectedValues}
          setSelectedValues={setSelectedValues}
          footer={footer}
          {...rest}
        />
      </div>
    )
  }

  return (
    <div className="select select--multi" ref={setContainerRef}>
      <MultiSelectGrouped
        isOpen={isOpen}
        emptyListMessage={emptyListMessage}
        onItemSelect={onItemSelect}
        onItemDeselect={onItemDeselect}
        toggleDropdown={toggleDropdown}
        checkIsValueOverflowed={checkIsValueOverflowed}
        selectButtonTexts={selectButtonTexts}
        options={options as TSelectGroupOptions}
        selectedValues={selectedValues}
        setSelectedValues={setSelectedValues}
        footer={footer}
        {...rest}
      />
    </div>
  )
}

export default Select
