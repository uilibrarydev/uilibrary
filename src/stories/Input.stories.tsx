import React, { useState } from 'react'
import { Input as InputComp } from '../components'

export default {
  title: 'Input',
  component: InputComp
}
const Template = (): JSX.Element => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (e: any) => {
    const _value = e.currentTarget.value
    setValue(_value)

    if (_value.length < 5) {
      setError('Inputed value is too short')
    } else {
      if (error) {
        setError('')
      }
    }
  }

  return (
    <div style={{ width: 300 }}>
      <InputComp label="Name" showError error={error} onChange={onChange} value={value} />
    </div>
  )
}

export const Input = Template.bind({})
