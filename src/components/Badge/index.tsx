import React from 'react'

import { TBadgeProps } from './types'
import '../../assets/styles/components/_badge.scss'

export const Badge = (props: TBadgeProps): JSX.Element | null => {
  const { type = 'primary', size = 'large', text, className = '', onClick } = props

  return (
    <div className={`badge badge--${type}  badge--${size} ${className}`} onClick={onClick}>
      {text ? <span className="badge__inner">{text}</span> : null}
    </div>
  )
}

export default Badge
