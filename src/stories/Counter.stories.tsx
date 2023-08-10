import React, { useState } from 'react'
import { Counter as CounterComp } from '../index'

export default {
  title: 'Counter',
  component: CounterComp
}

const Template = (args) => {
  const [count, setCount] = useState(6)

  const onChange = (count) => {
    setCount(count)
  }

  return <CounterComp {...args} handleChange={onChange} counter={count} />
}

export const Counter = Template.bind({})
Counter.args = {
  max: 999,
  min: 5,
  label: 'Counter label',
  customError: ''
}
