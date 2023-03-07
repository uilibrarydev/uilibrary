import React from 'react'
import Icon from '../../Icon'
import { TSelectItemProps } from './types'
import './index.scss'

export const SelectItem = (props: TSelectItemProps): JSX.Element => {
  const { data, onClick, avatar, isSelected, leftIconProps } = props

  const { label } = data
  const showLeftIcon = !avatar
  return (
    <div>
      <div className="select-item-container">
        {isSelected ? <Icon name="mark" /> : null}
        {avatar ? 'A' : null}
        {showLeftIcon ? <Icon {...leftIconProps} /> : null}
        <span className="select-option" onClick={() => onClick(data.value)}>
          {label}
        </span>
        {showLeftIcon ? <Icon {...leftIconProps} /> : null}
      </div>
    </div>
  )
}
