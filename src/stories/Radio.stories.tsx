import React, { useState } from 'react'
import { Radio as RadioComp, RadioGroup as RadioGroupComp } from '../components'

const RADIO_OPTIONS = [
  {
    label: 'Text1',
    value: 1
  },
  {
    label: 'Text2',
    value: 2
  },
  {
    label: 'Text3',
    value: 3
  }
]

export default {
  title: 'Radio',
  component: RadioComp,
  argTypes: {}
}

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(false)
  return <RadioComp {...args} isSelected={isChecked} onClick={setIsChecked} />
}

export const Radio = Template.bind({})

Radio.args = {
  disabled: false,
  label: 'Label for radio'
}

const RadioGroupTemplate = (args) => {
  return <RadioGroupComp {...args} />
}
export const RadioGroup = RadioGroupTemplate.bind({})

RadioGroup.args = {
  options: RADIO_OPTIONS,
  isHorizontal: false
}
