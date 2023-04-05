import React from 'react'
import { TSelectGroupOption } from '../../../types/globals'
import { TFilterGroupDropdownContentProps } from '../types'
import { FilterDropdownContent } from './FilterDropdown'

export const FilterGroupDropdownContent = (
  props: TFilterGroupDropdownContentProps
): JSX.Element => {
  const { options, ...rest } = props

  return (
    <>
      {options.map(({ data, title }: TSelectGroupOption) => {
        return (
          <div className="group_container" key={title}>
            <span>{title}</span>
            <FilterDropdownContent options={data} {...rest} />
          </div>
        )
      })}
    </>
  )
}
