import React, { ReactElement } from 'react'
import { Icon, Text } from '../index'

import { TChipsProps } from './types'
import classNames from 'classnames'
import '../../assets/styles/components/_chips.scss'

export const Chips = (props: TChipsProps): ReactElement => {
  const {
    type = 'filled',
    color = 'primary',
    size = 'large',
    text,
    disabled,
    className = '',
    leftIconProps,
    withAction,
    onClick
  } = props

  const customType = disabled ? 'disabled' : type == 'filled' ? 'inverse' : color

  return (
    <div
      className={classNames(
        `chips chips--${type} chips--${disabled ? 'disabled' : color} chips--${size}`,
        className
      )}
    >
      {leftIconProps?.name && (
        <Icon
          size={size == 'small' ? 'xsmall' : 'small'}
          type={customType}
          {...leftIconProps}
          className="mr-4"
        />
      )}
      <Text
        type={customType}
        size={size == 'small' ? 'small' : 'standard'}
        className="status__label"
      >
        <>{text}</>
      </Text>
      {withAction && (
        <Icon
          name="dismiss-circle-hover"
          size={size == 'small' ? 'xsmall' : 'small'}
          type={customType}
          className="chips__delete ml-4"
          onClick={onClick}
        />
      )}
    </div>
  )
}

export default Chips
