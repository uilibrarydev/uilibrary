import React from 'react'
import { Textarea as TextareaComp } from '../components'

export default {
  title: 'Textarea',
  component: TextareaComp
}
const Template = (args) => {
  return (
    <div style={{ maxWidth: 300 }}>
      <TextareaComp {...args} />
    </div>
  )
}
export const Textarea = Template.bind({})
Textarea.args = {
  label: 'Label',
  disabled: false,
  required: false,
  valid: false,
  error: 'This is your helper text'
}
