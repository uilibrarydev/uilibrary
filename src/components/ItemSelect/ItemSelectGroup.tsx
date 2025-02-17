import React from 'react'
import type { TItemSelectGroupProps } from './types'
import { ItemSelect } from './ItemSelect'
import classnames from 'classnames'

export const ItemSelectGroup = (props: TItemSelectGroupProps): JSX.Element => {
  const { items, name, value, isHorizontal, handleChange, className, iconGroup } = props
  return (
    <div
      className={classnames(
        'item-select-group',
        {
          'item-select-group--horizontal': isHorizontal
        },
        className
      )}
    >
      {items.map(
        ({ value: itemValue, label, image, leftIconProps, id, disabled, deSelectable }, index) => {
          return (
            <ItemSelect
              name={name}
              key={id || index}
              label={label}
              image={image}
              icon={iconGroup}
              leftIconProps={leftIconProps}
              handleChange={handleChange}
              itemValue={itemValue}
              value={value}
              disabled={disabled}
              deSelectable={deSelectable}
            />
          )
        }
      )}
    </div>
  )
}
