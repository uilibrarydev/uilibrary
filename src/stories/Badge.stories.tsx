import React from 'react'
import { Badge } from '../components/Badge'

export default {
  title: 'Badge',
  component: Badge,
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

const Template = (args) => <Badge {...args} />

export const BadgePlayground = Template.bind({})
BadgePlayground.args = {
  text: '999+',
  type: 'primary',
  size: 'large'
}
