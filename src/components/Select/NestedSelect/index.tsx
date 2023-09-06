import React, { useCallback, useState } from 'react'

import { Input } from '../../index'
import { OptionItem } from '../../../helperComponents/OptionItem'

import { TNestedSelectProps } from '../types'
import '../../../assets/styles/components/_select.scss'
import { useOnOutsideClick } from '../../../hooks'

const LEVEL_LEFT_MARGIN = 10

export const NestedSelect = (props: TNestedSelectProps): JSX.Element | null => {
  const {
    label,
    avatar,
    options,
    selected,
    placeHolder,
    isRequiredField,
    setSelectedValue,
    initialSelectedFolderIds,
    optionRightIconComponent,
    labelRightIconComponent
  } = props

  const [isDropdownOpen, setIsOpen] = useState(false)
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)
  const [selectedValues, setSelectedValues] = useState<TItemValue[]>(initialSelectedFolderIds || [])

  const openDropdown = () => setIsOpen(true)
  const closeDropdown = () => setIsOpen(false)

  const toggleDropdown = (e?: TClickEventType) => {
    const clickedElement = e?.target as HTMLDivElement
    if (e && clickedElement.className && clickedElement.className.indexOf('icon-') !== -1) {
      setIsOpen(!isDropdownOpen)
      e.preventDefault()
    } else {
      openDropdown()
    }
  }

  useOnOutsideClick(containerRef, closeDropdown)

  const onSelect = useCallback(
    (option: TSelectOption, hasChildren: boolean) => {
      const { value: optionValue } = option

      if (!hasChildren) {
        setSelectedValue(optionValue === selected?.value ? null : option)
        return
      }

      const isSelected = selectedValues.findIndex((i) => i === optionValue) !== -1
      if (isSelected) {
        setSelectedValues(selectedValues.filter((i) => i !== optionValue))
      } else {
        setSelectedValues([...selectedValues, optionValue])
      }
    },
    [selected, selectedValues]
  )

  const generateFolders = (foldersArr: TSelectOption[], level: number): Array<JSX.Element> =>
    foldersArr.reduce((acc: Array<JSX.Element>, option: TSelectOption) => {
      const { value, children, disabled } = option
      const isOpen = selectedValues.indexOf(option.value) !== -1
      const isSelected = option.value === selected?.value

      acc.push(
        <div style={{ paddingLeft: LEVEL_LEFT_MARGIN * level }}>
          <OptionItem
            data={option}
            key={value}
            isSelected={isSelected}
            onClick={() => onSelect({ value, label: option.label }, !!children)}
            avatar={avatar}
            disabled={disabled}
            optionRightIconComponent={optionRightIconComponent}
            labelRightIconComponent={labelRightIconComponent}
            labelLeftIconProps={children ? { name: 'caret-down', size: 'xsmall' } : undefined}
          />
        </div>
      )

      if (isOpen && children) {
        acc.push(...generateFolders(children, level + 1))
      }
      return acc
    }, [])

  return (
    <div className="select select--multi" ref={setContainerRef}>
      <div onClick={toggleDropdown}>
        <Input
          className="select__input"
          label={label}
          required={isRequiredField}
          rightIconProps={{ name: isDropdownOpen ? 'caret-up' : 'caret-down' }}
          placeholder={placeHolder}
          currentValue={selected?.label.toString() || ''}
          readonly={true}
        />
      </div>

      {isDropdownOpen && (
        <div className="select__options">
          <div className="select__options__scroll scrollbar scrollbar--vertical">
            {generateFolders(options, 0)}
          </div>
        </div>
      )}
    </div>
  )
}
