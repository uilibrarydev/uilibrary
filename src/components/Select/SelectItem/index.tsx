import React from 'react'
import Icon from '../../Icon'
import { TSelectItemProps } from './types'
import Avatar from '../../Avatar'
import Checkbox from '../../Checkbox'

export const SelectItem = (props: TSelectItemProps): JSX.Element => {
  const { data, onClick, disabled, avatar, isSelected, leftIconProps, rightIconProps } = props

  const { label } = data
  // const showLeftIcon = !avatar

  return (
    <div className={`select__option ${disabled ? 'select__option--disabled' : ''}`}>
      {isSelected ? (
        <Icon
          name="mark"
          size="xsmall"
          type={`${disabled ? 'disabled' : 'brand'}`}
          className="mr-8"
        />
      ) : null}
      <Checkbox className="mr-8" />
      <div className="select__option__inner" onClick={() => onClick(data.value)}>
        {avatar ? <Avatar size="xxsmall" imagePath={avatar} className="mr-4" /> : null}
        {leftIconProps ? (
          <Icon
            {...leftIconProps}
            size="xsmall"
            type={`${disabled ? 'disabled' : 'primary'}`}
            className="mr-8"
          />
        ) : null}
        <span className="select__option__text">{label}</span>
      </div>
      {rightIconProps ? (
        <Icon
          {...rightIconProps}
          size="xsmall"
          type={`${disabled ? 'disabled' : 'primary'}`}
          className="ml-8"
        />
      ) : null}
    </div>
  )
}
