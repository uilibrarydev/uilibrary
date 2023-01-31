import React from 'react'
import { Radio as RadioComp } from '../components'
import { noop } from '../utils'

export default {
  title: 'Radio',
  component: RadioComp,
  argTypes: {}
}

const Template = (args) => <RadioComp {...args} />

export const Radio = Template.bind({})

Radio.args = {
  value: true,
  justIcon: false,
  disabled: false,
  onClick: noop
}
