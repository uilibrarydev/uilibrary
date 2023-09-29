import React, { ReactElement } from 'react'
import { Text } from '../index'

import { TBadgeProps } from './types'
import '../../assets/styles/components/_badge.scss'

export const Badge = (props: TBadgeProps): ReactElement => {
  const { type = 'primary', size = 'large', text, className = '' } = props

  return (
    <div className={`badge badge--${type}  badge--${size} ${className}`}>
      {text ? (
        <Text
          size="xsmall"
          type={type == 'primary' ? 'inverse' : 'primary'}
          className="badge__inner"
        >
          <>{text}</>
        </Text>
      ) : null}
    </div>
  )
}

export default Badge
