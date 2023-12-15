import React, { useCallback } from 'react'

import { Checkbox } from '../../components/Checkbox'
import { Avatar } from '../../components'
import Icon from '../../components/Icon'
import { TSelectItemProps } from './types'
import { Tooltip } from '../../index'

export const OptionItem = (props: TSelectItemProps): JSX.Element => {
  const {
    data,
    onClick,
    disabled,
    avatar,
    isSelected,
    labelLeftIconProps,
    LabelRightIconComponent,
    OptionRightIconComponent,
    isCheckbox,
    className = '',
    tooltipAddons
  } = props

  const { label, meta, value } = data

  const handleClick = useCallback(
    (e: TClickEventType) => {
      e.preventDefault()
      e.stopPropagation()

      if (disabled) {
        return
      }
      onClick({ value, label })
    },
    [disabled, value, label, onClick]
  )

  const optionContent = (
    <div
      id={`${value}`}
      className={`select__option   ${disabled ? 'select__option--disabled' : ''} ${className}`}
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
            size="xsmall"
            type={`${disabled ? 'disabled' : 'primary'}`}
            className="mr-4 select__left-icon"
            {...labelLeftIconProps}
          />
        ) : null}
        <div className="select__option__content">
          <span className={`select__option__text pr-4 ${disabled ? 'color-disabled' : ''}`}>
            {label}
          </span>
          {LabelRightIconComponent && LabelRightIconComponent(value)}

          {meta ? (
            <span className={`select__option__meta ${disabled ? 'color-disabled' : ''}`}>
              {meta}
            </span>
          ) : null}
        </div>
      </div>
      {OptionRightIconComponent && OptionRightIconComponent(value)}
    </div>
  )

  return tooltipAddons ? (
    <Tooltip {...tooltipAddons} text={`${label}`} id={`${value}`}>
      {optionContent}
    </Tooltip>
  ) : (
    optionContent
  )
}
