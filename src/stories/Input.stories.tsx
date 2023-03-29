import React, { useState } from 'react'
import { Input as InputComp } from '../components'
import { TChangeEventType } from '../types/globals'

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
const Template = (args) => {
  const [value, setValue] = useState('')
  const changeHandler = (e: TChangeEventType) => {
    setValue(e.target.value)
  }

  return (
    <div style={{ maxWidth: 300 }}>
      <InputComp {...args} currentValue={value} onChange={changeHandler} />
    </div>
  )
}

export const Input = Template.bind({})
Input.args = {
  type: 'text',
  iconProps: {
    name: 'info'
  },
  label: 'Some text',
  size: 'large',
  leftIcon: false,
  rightIcon: false,
  disabled: false,
  required: false,
  maxCount: 15,
  placeholder: 'Some text',
  helperText: 'This is your helper text',
  successMessage: 'Success message',
  error: 'Error message'
}
