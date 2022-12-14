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
    const _value = e.target.value
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
      <InputComp
        value={value}
        onChange={onChange}
        label="Հեռախոսահամար"
        mask="(+374) 99 99 99 99"
      />
    </div>
  )
}

export const Input = Template.bind({})
