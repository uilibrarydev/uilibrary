import React, { useState } from 'react'
import { Checkbox } from '../components/Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {}
}

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <Checkbox
      {...args}
      selectedValue={isChecked}
      onClick={setIsChecked}
      popoverAddons={{
        id: 'some-id',
        text: 'hello-popover'
      }}
    />
  )
}

export const CheckboxPlayground = Template.bind({})

CheckboxPlayground.args = {
  dataId: 'id',
  disabled: false,
  required: false,
  label: 'Label for checkbox',
  link: '/about',
  beforeLink: 'das',
  afterLink: 'after-link',
  helperText: 'helper text'
}
