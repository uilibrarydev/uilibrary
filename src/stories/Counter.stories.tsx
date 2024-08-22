import React, { useState } from 'react'
import { Counter as _Counter } from '../index'
import { StoryFn } from '@storybook/react'
import { ICounterProps } from '../components/Counter/types'

export default {
  title: 'Counter',
  component: _Counter
}

const Template: StoryFn<ICounterProps> = (args) => {
  const [count, setCount] = useState(6)

  const onChange = (count: string | number | undefined) => {
    setCount(count as number)
  }

  return <_Counter {...args} handleChange={onChange} counter={count} dataId={'counter'} />
}

export const Counter = Template.bind({})
Counter.args = {
  max: 999,
  min: 5,
  label: 'Counter label',
  customError: ''
}
