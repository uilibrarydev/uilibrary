import React, { useState } from 'react'
import { Checkbox as CheckboxComp } from '../components'
import { Icon } from '../index'

export default {
  title: 'Checkbox',
  component: CheckboxComp,
  argTypes: {}
}

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(false)
  return <CheckboxComp {...args} selectedValue={isChecked} onClick={setIsChecked} />
}

export const Checkbox = Template.bind({})

Checkbox.args = {
  dataId: 'dadas',
  disabled: false,
  required: false,
  label: 'Label for checkbox',
  beforeLink: 'das',
  afterLink: 'dasdsa',
  link: 'dasdsa',
  helperText: 'dasdasdasdas'
}
