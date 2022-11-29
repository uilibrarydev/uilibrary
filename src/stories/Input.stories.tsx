import React, { useState } from 'react'
import { Input as InputComp } from '../components'

export default {
  title: 'Input',
  component: InputComp
}
const Template = (): JSX.Element => {
  const [value, setValue] = useState('')

  const onChange = (e: TInputChangeEventType) => {
    setValue(e.currentTarget.value)
  }
  return <InputComp onChange={onChange} value={value} />
}

export const Input = Template.bind({})
