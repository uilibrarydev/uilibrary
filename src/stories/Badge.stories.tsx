import React from 'react'
import { Badge as _Badge } from '../index'

export default {
  title: 'Badge',
  component: _Badge,
  argTypes: {
    type: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    },
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => <_Badge {...args} />

export const Badge = Template.bind({})

Badge.args = {
  text: '999+',
  type: 'primary',
  size: 'large'
}
