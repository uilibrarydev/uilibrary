import React, {useState} from 'react'
import {Radio as RadioComp} from '../components'
import { noop } from '../utils'

export default {
  title: 'Radio',
  component: RadioComp,
  argTypes: {}
}

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(false)
  return <RadioComp {...args} selectedValue={isChecked} setFieldValue={setIsChecked} />
}

export const Radio = Template.bind({})

Radio.args = {
  disabled: false,
  label: 'Label for radio',
  onClick: noop
}
