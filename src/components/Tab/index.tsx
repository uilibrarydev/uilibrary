import React from 'react'

import { TTabProps } from './types'
import '../../assets/styles/components/_tab.scss'
import Icon from '../Icon'
import Badge from '../Badge'

export const Tab = (props: TTabProps): JSX.Element | null => {
  const {
    size = 'large',
    iconProps,
    badgeProps,
    label,
    className = '',
    disabled,
    selectedValue
  } = props

  return (
    <div
      className={`tab tab--${size} 
                        ${disabled ? 'tab--disabled' : ''} 
                        ${selectedValue ? 'tab--selected' : ''} 
                        ${className}`}
    >
      {iconProps?.name ? <Icon {...iconProps} className="tab__icon mr-8" size="small" /> : null}
      <span className="tab__label">{label}</span>
      {badgeProps?.text ? (
        <Badge {...badgeProps} className="tab__badge ml-8" size="small" type="secondary" />
      ) : null}
    </div>
  )
}

export default Tab
