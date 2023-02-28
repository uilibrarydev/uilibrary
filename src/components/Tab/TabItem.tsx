import React from 'react'

import Icon from '../Icon'
import Badge from '../Badge'

import { noop } from '../../utils'

import { TTabItemProps } from './types'
import '../../assets/styles/components/_tab.scss'

export const TabItem = (props: TTabItemProps): JSX.Element | null => {
  const {
    size = 'large',
    iconProps,
    badgeProps,
    label,
    className = '',
    disabled,
    isSelected,
    onClick
  } = props

  return (
    <div
      onClick={disabled ? noop : onClick}
      className={`tab tab--${size} 
                        ${disabled ? 'tab--disabled' : ''} 
                        ${isSelected ? 'tab--selected' : ''} 
                        ${className}`}
    >
      {iconProps?.name ? (
        <Icon
          {...iconProps}
          className="tab__icon mr-8"
          size={`${size == 'small' ? 'xsmall' : 'small'}`}
        />
      ) : null}
      <span className="tab__label">{label}</span>
      {badgeProps?.text ? (
        <Badge {...badgeProps} className="tab__badge ml-8" size="small" type="secondary" />
      ) : null}
    </div>
  )
}

export default TabItem
