import React, { useMemo } from 'react'
import { TSelectOption } from '../../../types/globals'
import { SelectItem } from '../SelectItem'
import { TFilterDropdownContentProps } from '../types'
export const FilterDropdownContent = (props: TFilterDropdownContentProps): JSX.Element => {
  const {
    checkIsSelected,
    filterValue,
    options,
    onItemSelect,
    onItemDeselect,
    labelLeftIconProps,
    optionRightIconComponent,
    labelRightIconComponent,
    avatar
  } = props

  const filteredOptions = useMemo(() => {
    return options.filter((option) => {
      return option.label.toString().includes(filterValue)
    })
  }, [filterValue, options])

  return (
    <>
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
            isCheckbox={true}
            disabled={item.disabled}
            isSelected={isSelected}
          />
        )
      })}
    </>
  )
}
