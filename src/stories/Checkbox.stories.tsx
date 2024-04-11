import React, { useState } from 'react'
import { Checkbox as _Checkbox } from '../index'

export default {
  title: 'Checkbox',
  component: _Checkbox,
  argTypes: {}
}

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <_Checkbox
      {...args}
      selectedValue={isChecked}
      onClick={setIsChecked}
      popoverAddons={{
        id: 'some-id',
        text: 'hello-popover',
        dataId: 'test'
      }}
    />
  )
}

export const Checkbox = Template.bind({})

Checkbox.args = {
  dataId: 'id',
  disabled: false,
  required: false,
  label: 'Label for checkbox',
  link: '/about',
  beforeLink: 'das',
  afterLink: 'after-link',
  helperText: 'helper text'
}
