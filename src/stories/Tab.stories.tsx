import React from 'react'
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

const Template = (args) => <TabComp {...args} />

export const Tab = Template.bind({})

Tab.args = {
  label: 'Prompt text',
  iconProps: {
    name: 'home'
  },
  badgeProps: {
    text: '9'
  },
  size: 'large',
  selectedValue: false,
  disabled: false
}
