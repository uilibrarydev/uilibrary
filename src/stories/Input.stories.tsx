import React from 'react'
import { Input as InputComp } from '../components'

export default {
  title: 'Input',
  component: InputComp,
  argTypes: {
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' }
    }
  }
}
const Template = (args) => <InputComp {...args} />

export const Input = Template.bind({})
Input.args = {
  type: 'text',
  iconProps: {
    name: 'info'
  },
  label: 'Label',
  size: 'large',
  leftIcon: false,
  rightIcon: false,
  disabled: false,
  required: false,
  valid: false,
  error: 'This is your helper text'
}
