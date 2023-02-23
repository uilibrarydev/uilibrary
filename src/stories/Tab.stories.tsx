import React, { useState } from 'react'
import { Tab as TabComp } from '../components'

export default {
  title: 'Tab',
  component: TabComp,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args): JSX.Element | null => {
  const [selectedTab, onTabSelect] = useState(args.selectedValue)
  return <TabComp {...args} selectedValue={selectedTab} onSelect={onTabSelect} />
}

export const Tab = Template.bind({})

Tab.args = {
  iconProps: {
    name: 'home'
  },
  badgeProps: {
    text: '9'
  },
  size: 'large',
  selectedValue: 2,
  disabled: false,
  tabItems: [
    {
      label: 'Prompt text 1',
      value: 1
    },
    {
      label: 'Prompt text 2',
      value: 2
    },
    {
      label: 'Prompt text 3',
      value: 3
    }
  ]
}
