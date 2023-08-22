import React, { useCallback, useMemo, useState } from 'react'

import { Input } from '../../index'
import { OptionItem } from '../../../helperComponents/OptionItem'
import { useGetElemSizes } from '../../../hooks/useGetElemSizes'
import { checkIsValueOverflowed, incrementOverflowedinitial } from '../utils'

import { TNestedSelectProps } from '../types'
import '../../../assets/styles/components/_select.scss'
import { useOnOutsideClick } from '../../../hooks'

const LEVEL_LEFT_MARGIN = 10
type TSelectedItemsWithLevels = {
  [key: string | number]: TItemValue[]
}
export const NestedSelect = (props: TNestedSelectProps): JSX.Element | null => {
  const {
    value,
    label,
    options,
    placeHolder,
    selectedItems,
    isRequiredField,
    setSelectedValue,
    optionRightIconComponent,
    labelRightIconComponent,
    avatar
  } = props
  const initialSelected = (value as TItemValue[]) || selectedItems || []

  const [isDropdownOpen, setIsOpen] = useState(false)
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)
  const [selectedValues, setSelectedValues] = useState<TItemValue[]>(initialSelected)
  const [selectedItemsWithLevels, setSelectedLevels] = useState<TSelectedItemsWithLevels>({})

  const { width } = useGetElemSizes(containerRef)

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
  const _checkIsValueOverflowed = useCallback(
    (value: string) => checkIsValueOverflowed(value, width),
    [width]
  )

  const onSelect = useCallback(
    (
      optionValue: TItemValue,
      hasChildren: boolean,
      level: string | number,
      isSelected: boolean
    ) => {
      if (!hasChildren) {
        setSelectedValue(optionValue)
      }

      const isLevelAlreadyClicked = !!selectedItemsWithLevels[level]

      if (isLevelAlreadyClicked) {
        const idsTobeClosed = Object.keys(selectedItemsWithLevels).reduce(
          (acc: TItemValue[], levelKey: TItemValue) => {
            if (levelKey && levelKey >= level) {
              acc = [...acc, ...selectedItemsWithLevels[levelKey]]
            }
            return acc
          },
          []
        )

        const filtered = selectedValues.filter((item) => idsTobeClosed.indexOf(item) === -1)

        if (isSelected) {
          setSelectedValues([...filtered])
        } else {
          setSelectedValues([...filtered, optionValue])
        }
        const reduceInitialValue = isSelected ? {} : { [level]: [optionValue] }

        setSelectedLevels((levels: TSelectedItemsWithLevels) => {
          return Object.keys(levels).reduce(
            (acc: TSelectedItemsWithLevels, levelKey: string | number) => {
              if (levelKey && levelKey < level) {
                acc[levelKey] = levels[levelKey]
              }
              return acc
            },
            reduceInitialValue
          )
        })
      } else {
        setSelectedValues([...selectedValues, optionValue])
        setSelectedLevels((levels: TSelectedItemsWithLevels) => {
          return { ...levels, [level]: [optionValue] }
        })
      }
    },
    [selectedValues, selectedItemsWithLevels]
  )

  // get selected option labels based on opened child units
  const getSelectedItemsLabels = (
    option: TSelectOption,
    labelCurrentValue: { value: string; overflowCount: number }
  ): string => {
    const { overflowCount, value } = labelCurrentValue
    let _overflowCount = overflowCount
    const isOpen = selectedValues.indexOf(option.value) !== -1

    if (isOpen) {
      const current = `${value}${value ? ', ' : ''}${option.label}`

      if (_checkIsValueOverflowed(current)) {
        _overflowCount = _overflowCount + 1
        return incrementOverflowedinitial(value, _overflowCount)
      }

      if (option.children) {
        return option.children.reduce(
          (acc, item) =>
            getSelectedItemsLabels(item, { value: acc, overflowCount: _overflowCount }),
          current
        )
      }
      return current
    }

    return value
  }

  const selectedItemsLabels = useMemo(() => {
    if (!selectedValues.length) {
      return ''
    }
    const currentValue = options.reduce(
      (acc: { inputValue: string; visibleOptionsLength: number }, option: TSelectOption) => {
        const label = getSelectedItemsLabels(option, { value: '', overflowCount: 0 })

        const { inputValue, visibleOptionsLength } = acc
        const accNextValue = `${inputValue}${label}`

        acc = { inputValue: accNextValue, visibleOptionsLength: visibleOptionsLength + 1 }

        return acc
      },
      { inputValue: '', visibleOptionsLength: 0 }
    )

    return currentValue.inputValue
  }, [options, selectedValues, _checkIsValueOverflowed, getSelectedItemsLabels])

  const generateFolders = (foldersArr: TSelectOption[], level: number): Array<JSX.Element> =>
    foldersArr.reduce((acc: Array<JSX.Element>, option: TSelectOption) => {
      const { value, children, disabled } = option
      const isOpen = selectedValues.indexOf(option.value) !== -1
      const isSelected = isOpen && !option.children
      acc.push(
        <div style={{ paddingLeft: LEVEL_LEFT_MARGIN * level }}>
          <OptionItem
            data={option}
            key={value}
            isSelected={isSelected}
            onClick={() => onSelect(value, !!children, level, isOpen)}
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
          currentValue={selectedItemsLabels}
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
