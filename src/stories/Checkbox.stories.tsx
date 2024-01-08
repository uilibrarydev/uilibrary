import React, { useState } from 'react'
import { Checkbox as CheckboxComp } from '../components'

export default {
  title: 'Checkbox',
  component: CheckboxComp,
  argTypes: {}
}

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(false)
  return <CheckboxComp {...args} selectedValue={isChecked} onClick={setIsChecked} popoverAddons={{
    id:'some-id',
    text:'hello-popover'
  }}/>
}

export const Checkbox = Template.bind({})

Checkbox.args = {
  dataId: 'id',
  disabled: false,
  required: false,
  label: 'Label for checkbox',
  beforeLink: 'das',
  helperText: 'helpertext'
}
