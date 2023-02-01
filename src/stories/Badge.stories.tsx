import React from 'react'
import { Badge as BadgeComp } from '../components'

export default {
  title: 'Badge',
  component: BadgeComp,
  argTypes: {
    type: {
      options: ['count', 'dot'],
      control: { type: 'radio' }
    },
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' }
    },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => <BadgeComp {...args} />

export const Badge = Template.bind({})

Badge.args = {
  text: '999+',
  type: 'count',
  color: 'primary',
  size: 'large'
}
