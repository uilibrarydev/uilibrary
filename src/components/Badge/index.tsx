import React from 'react'
import { TBadgeProps } from './types'
import './index.scss'

export const Badge = (props: TBadgeProps): JSX.Element | null => {
  const {
      type,
      size,
      color,
      text = '999+',
      className =''
  } = props


  return (
      <span className={`badge badge--${type} badge--${color} badge--${size} ${className}`}>
          {type == 'count' && text}
      </span>
  )
}

export default Badge
