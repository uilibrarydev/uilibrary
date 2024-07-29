import React, { ReactElement } from 'react'
import { TTabProps } from './types'
import { TabItem } from './TabItem'

export const Tab = (props: TTabProps): ReactElement => {
  const { selectedValue, tabItems, onSelect, ...rest } = props

  return (
    <div className="tabs-container">
      {tabItems.map((tabInfo) => {
        return (
          <TabItem
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
