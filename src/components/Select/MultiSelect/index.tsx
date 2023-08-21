import React, { useCallback, useMemo, useState } from 'react'

import { Input } from '../../index'

import { useOnOutsideClick } from '../../../hooks'
import { useGetElemSizes } from '../../../hooks/useGetElemSizes'
import { getStringWidth, setTranslationValue } from '../../../utils'

import { Footer } from '../SharedComponents'
import { MultiSelect } from './Multi'
import { MultiSelectGrouped } from './Grouped'
import { MultiSelectWithTabs } from './WithTabs'
import { SELECTED_VISIBLE_MIN_COUNT, TRANSLATIONS_DEFAULT_VALUES } from './consts'

import { TMultiSelectPropTypes } from '../types'
import '../../../assets/styles/components/_select.scss'

const Select = (props: TMultiSelectPropTypes): JSX.Element | null => {
  const {
    withTabs,
    isGrouped,
    options,
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
    label,
    placeHolder,
    isRequiredField,
    translations,
    ...rest
  } = props

  const localizations = { ...TRANSLATIONS_DEFAULT_VALUES, ...translations }

  const { overflowText } = localizations

  const initialSelected = (value as TSelectedValue[]) || selectedItems || null

  const [isOpen, setIsOpen] = useState(false)
  const [selectedValues, setSelectedValues] = useState<TSelectedValue[]>(initialSelected)
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

  const submitSelectedValue = (selections: TSelectedValue[]) => {
    if (setSelectedItems) {
      setSelectedItems(selections)
    }
    if (name && setFieldValue) {
      setFieldValue(name, selections)
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

  const onItemSelect = useCallback((item: TSelectedValue) => {
    setSelectedValues((selected: TSelectedValue[]) => [...selected, item])
  }, [])

  const onItemDeselect = (item: TSelectedValue) => {
    setSelectedValues((selected: TSelectedValue[]) =>
      selected.filter((optionValue: TSelectedValue) => optionValue.value !== item.value)
    )
  }

  const selectedItemsLabels = useMemo(() => {
    const onlyLabels = selectedValues.map((selected) => selected.label)
    const joinedLabel = onlyLabels.join(', ')

    return checkIsValueOverflowed(joinedLabel)
      ? setTranslationValue(overflowText, selectedValues.length)
      : joinedLabel
  }, [options, selectedValues, checkIsValueOverflowed])

  const optionsCount = useMemo(() => {
    if (isGrouped || withTabs) {
      const typed_options = options as TSelectGroupOptions
      return typed_options.reduce((acc: number, option: TSelectGroupOption) => {
        const { data } = option
        return acc + data.length
      }, 0)
    }
    return options.length
  }, [options])

  const SelectComp = withTabs ? MultiSelectWithTabs : isGrouped ? MultiSelectGrouped : MultiSelect

  return (
    <div className="select select--multi" ref={setContainerRef}>
      <div onClick={toggleDropdown}>
        <Input
          readonly
          label={label}
          className="select__input"
          placeholder={placeHolder}
          required={isRequiredField}
          currentValue={selectedItemsLabels}
          rightIconProps={{ name: isOpen ? 'caret-up' : 'caret-down' }}
        />
      </div>

      <SelectComp
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        options={options}
        isOpen={isOpen}
        footer={footer}
        translations={localizations}
        selectedValues={selectedValues}
        onItemSelect={onItemSelect}
        onItemDeselect={onItemDeselect}
        toggleDropdown={toggleDropdown}
        setSelectedValues={setSelectedValues}
        checkIsValueOverflowed={checkIsValueOverflowed}
        isSearchAvailable={optionsCount > SELECTED_VISIBLE_MIN_COUNT}
        {...rest}
      />
    </div>
  )
}

export default Select
