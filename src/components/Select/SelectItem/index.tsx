import React, { useCallback } from 'react'
import Icon from '../../Icon'
import { TSelectItemProps } from './types'
import Avatar from '../../Avatar'
import Checkbox from '../../Checkbox'
import { TClickEventType } from '../../../types/globals'

export const SelectItem = (props: TSelectItemProps): JSX.Element => {
  const {
    data,
    onClick,
    disabled,
    avatar,
    isSelected,
    labelRightIconComponent,
    labelLeftIconProps,
    optionRightIconComponent,
    isCheckbox
  } = props

  const { label, meta, value } = data

  const handleClick = useCallback(
    (e: TClickEventType) => {
      e.preventDefault()

      if (disabled) {
        return
      }
      onClick(value)
    },
    [disabled, value, onClick]
  )

  return (
    <div
      className={`select__option ${disabled ? 'select__option--disabled' : ''}`}
      onClick={handleClick}
    >
      {isCheckbox ? (
        <Checkbox className="mr-8" selectedValue={isSelected} disabled={disabled} />
      ) : null}
      {!isCheckbox && isSelected ? (
        <Icon
          name="mark"
          size="xsmall"
          type={`${disabled ? 'disabled' : 'brand'}`}
          className="mr-4"
        />
      ) : null}
      <div className="select__option__inner">
        {avatar ? <Avatar size="xxsmall" imagePath={avatar} className="mr-4" /> : null}
        {labelLeftIconProps ? (
          <Icon
            {...labelLeftIconProps}
            size="xsmall"
            type={`${disabled ? 'disabled' : 'primary'}`}
            className="mr-4"
          />
        ) : null}
        <div className="select__option__content">
          <span className={`select__option__text pr-4 ${disabled ? 'color-disabled' : ''}`}>
            {label}
          </span>
          {labelRightIconComponent}
          {meta ? (
            <span className={`select__option__text ${disabled ? 'color-disabled' : ''}`}>
              - {meta}
            </span>
          ) : null}
        </div>
      </div>
      {optionRightIconComponent}
    </div>
  )
}
