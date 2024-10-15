import React, { ReactElement } from 'react'
import { TTabProps } from './types'
import { TabItem } from './TabItem'
import classNames from 'classnames'

export const Tab = (props: TTabProps): ReactElement => {
  const { selectedValue, tabItems, onSelect, size, className, type = 'primary', ...rest } = props

  return (
    <div className={classNames('tabs-container', `tabs-container--${type}`, className)}>
      {tabItems.map((tabInfo) => {
        return (
          <TabItem
            size={type === 'secondary' ? 'medium' : size}
            label={tabInfo.label}
            badgeProps={tabInfo.badgeProps}
            onClick={() => onSelect(tabInfo.value)}
            key={tabInfo.value}
            val={tabInfo.value}
            isSelected={selectedValue === tabInfo.value}
            dataId={tabInfo?.dataId || ''}
            disabled={tabInfo.disabled}
            {...rest}
          />
        )
      })}
    </div>
  )
}
