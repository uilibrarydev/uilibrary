import React from 'react'

import { TTabProps } from './types'
import '../../assets/styles/components/_tab.scss'
import TabItem from './TabItem'

const Tab = (props: TTabProps) => {
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

Tab.displayName = 'Tab'
export default Tab
export {}
