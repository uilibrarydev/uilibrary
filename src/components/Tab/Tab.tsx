import React, { ReactElement } from 'react'
import { TTabProps } from './types'
import { TabItem } from './TabItem'
import '../../assets/styles/components/_tab.scss'

export const Tab = (props: TTabProps): ReactElement => {
  const { selectedValue, tabItems, onSelect, ...rest } = props

  return (
    <div className="tabs-container">
      {tabItems.map((tabInfo) => {
        return (
          <TabItem
            label={tabInfo.label}
            onClick={() => onSelect(tabInfo.value)}
            key={tabInfo.value}
            isSelected={selectedValue === tabInfo.value}
            {...rest}
          />
        )
      })}
    </div>
  )
}
