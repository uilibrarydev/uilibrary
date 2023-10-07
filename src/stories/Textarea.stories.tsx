import React, { useState } from 'react'
import { Textarea as TextareaComp } from '../components'
import { Icon } from '../index'

type TChangeEventType = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>

export default {
  title: 'Textarea',
  component: TextareaComp
}
const Template = (args) => {
  const [value, setValue] = useState('')
  const changeHandler = (e: TChangeEventType) => {
    setValue(e.target.value)
  }
  return (
    <div style={{ maxWidth: 300 }}>
      <TextareaComp {...args} currentValue={value} onChange={changeHandler} />
    </div>
  )
}
export const Textarea = Template.bind({})
Textarea.args = {
  label: 'Label',
  disabled: false,
  required: false,
  valid: false,
  placeholder: 'Enter text',
  helperText: 'This is your helper text',
  successMessage: 'Success message',
  error: 'Error message',
  maxCount: 240,
  labelAddons: <Icon name={'info'} size={'xsmall'} type={'information'} className={'ml-4'} />
}
