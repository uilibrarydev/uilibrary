import React from 'react'
import { Checkbox as CheckboxComp } from '../components'
import { noop } from '../utils'

export default {
  title: 'Checkbox',
  component: CheckboxComp,
  argTypes: {}
}

const Template = (args) => <CheckboxComp {...args} />

export const Checkbox = Template.bind({})

Checkbox.args = {
  value: true,
  justIcon: false,
  disabled: false,
  required: false,
  onClick: noop
}
