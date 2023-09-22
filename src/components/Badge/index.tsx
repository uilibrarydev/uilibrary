import React, { ReactElement } from 'react'
import { Icon, Text } from '../index'

import { TBadgeProps } from './types'
import '../../assets/styles/components/_badge.scss'

export const Badge = (props: TBadgeProps): ReactElement => {
  const {
    type = 'primary',
    size = 'large',
    text,
    className = '',
    onClick,
    rightIconProps,
    leftIconProps
  } = props

  return (
    <div className={`badge badge--${type}  badge--${size} ${className}`} onClick={onClick}>
      <Icon size="xsmall" {...leftIconProps} />
      <Text size="small" className="badge__inner">
        <>{text}</>
      </Text>
      <Icon size="xsmall" {...rightIconProps} />
    </div>
  )
}

export default Badge
