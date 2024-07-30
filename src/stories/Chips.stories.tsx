import React from 'react'
import { Chips as _Chips } from '../components/Chips'
import IconPerson from '../components/SVGIcons/IconPerson'

export default {
  title: 'Chips',
  component: _Chips,
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

const Template = (args) => <_Chips {...args} />

export const Chips = Template.bind({})

Chips.args = {
  type: 'filled',
  color: 'primary',
  size: 'large',
  text: 'Badge',
  leftIconProps: {
    Component: IconPerson
  },
  disabled: false,
  withAction: false
}
