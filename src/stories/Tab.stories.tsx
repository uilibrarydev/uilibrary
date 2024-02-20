import React, { useState } from 'react'
import { Tab as _Tab } from '../index'

export default {
  title: 'Tab',
  component: _Tab,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args): JSX.Element | null => {
  const [selectedTab, onTabSelect] = useState(args.selectedValue)
  return <_Tab {...args} selectedValue={selectedTab} onSelect={onTabSelect} />
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
