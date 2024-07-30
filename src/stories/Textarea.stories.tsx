import React, { useState } from 'react'
import { Textarea as _Textarea } from '../index'
import IconInfo from '../components/SVGIcons/IconInfo'

type TChangeEventType = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>

export default {
  title: 'Textarea',
  component: _Textarea
}

const Template = (args: any) => {
  const [value, setValue] = useState('')
  const changeHandler = (e: TChangeEventType) => {
    setValue(e.target.value)
  }
  return (
    <div style={{ maxWidth: 300 }}>
      <_Textarea {...args} currentValue={value} onChange={changeHandler} />
    </div>
  )
}
export const Textarea = Template.bind({})
// @ts-ignore
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
  labelAddons: <IconInfo size={'xsmall'} type={'information'} className={'ml-4'} />
}
