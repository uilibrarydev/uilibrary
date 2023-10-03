import React from 'react'
import { Chips as ChipsComp } from '../components'

export default {
  title: 'Chips',
  component: ChipsComp,
  argTypes: {
    type: {
      options: ['filled', 'accent', 'outlined'],
      control: { type: 'radio' }
    },
    color: {
      options: ['primary', 'brand', 'danger', 'warning', 'success', 'information', 'discovery'],
      control: { type: 'radio' }
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => <ChipsComp {...args} />

export const Chips = Template.bind({})

Chips.args = {
  type: 'filled',
  color: 'primary',
  size: 'large',
  text: 'Badge',
  leftIconProps: {
    name: 'user'
  },
  disabled: false
}
