import React from 'react'
import Icon from '../../Icon'
import { TSelectItemProps } from './types'
import Avatar from '../../Avatar'
import Checkbox from '../../Checkbox'

export const SelectItem = (props: TSelectItemProps): JSX.Element => {
  const {
    data,
    onClick,
    disabled,
    avatar,
    isSelected,
    labelRightIconProps,
    labelLeftIconProps,
    optionRightIconProps,
    isCheckbox
  } = props

  const { label } = data

  return (
    <div
      className={`select__option ${disabled ? 'select__option--disabled' : ''}`}
      onClick={() => !disabled && onClick(data.value)}
    >
      {isCheckbox ? <Checkbox className="mr-8" value={isSelected} disabled={disabled} /> : null}
      {!isCheckbox && isSelected ? (
        <Icon
          name="mark"
          size="xsmall"
          type={`${disabled ? 'disabled' : 'brand'}`}
          className="mr-8"
        />
      ) : null}
      <div className="select__option__inner">
        {avatar ? <Avatar size="xxsmall" imagePath={avatar} className="mr-4" /> : null}
        {labelLeftIconProps ? (
          <Icon
            {...labelLeftIconProps}
            size="xsmall"
            type={`${disabled ? 'disabled' : 'primary'}`}
            className="mr-8"
          />
        ) : null}
        <span className={`select__option__text ${disabled ? 'color-disabled' : ''}`}>{label}</span>
        {labelRightIconProps ? (
          <Icon
            {...labelRightIconProps}
            size="xsmall"
            type={`${disabled ? 'disabled' : 'primary'}`}
            className="mr-8"
          />
        ) : null}
      </div>
      {optionRightIconProps ? (
        <Icon
          {...optionRightIconProps}
          size="xsmall"
          type={`${disabled ? 'disabled' : 'primary'}`}
          className="ml-8"
        />
      ) : null}
    </div>
  )
}
