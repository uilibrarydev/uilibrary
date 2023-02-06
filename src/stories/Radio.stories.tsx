import React, { useState } from 'react'
import { Radio as RadioComp } from '../components'

export default {
  title: 'Radio',
  component: RadioComp,
  argTypes: {}
}

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(false)
  return <RadioComp {...args} selectedValue={isChecked} onClick={setIsChecked} />
}

export const Radio = Template.bind({})

Radio.args = {
  disabled: false,
  label: 'Label for radio'
}
