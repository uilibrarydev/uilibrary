import React from 'react'
import { Button as _Button, IconChevronDown } from '../index'

export default {
  title: 'Button',
  component: _Button,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'tertiary', 'danger', 'text', 'link'],
      control: { type: 'radio' }
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' }
    },
    disabled: {
      options: ['true', 'false'],
      control: { disabled: 'true' }
    },
    isLoading: {
      options: ['true', 'false'],
      control: { isLoading: 'false' }
    }
  }
}

const Template = (args) => <_Button {...args} />

export const Button = Template.bind({})
Button.args = {
  iconProps: {
    Component: IconChevronDown
  },
  autoFocus: true,
  type: 'tertiary',
  size: 'large',
  disabled: false,
  isLoading: false,
  buttonText: 'Label',
  onClick: () => console.log('button clicked')
}
