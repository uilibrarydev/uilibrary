import React from 'react'
import { Progress as _Progress } from '../index'

export default {
  title: 'Progress',
  component: _Progress,
  argTypes: {
    type: {
      options: ['linear', 'circle'],
      control: { type: 'radio' }
    },
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => {
  return <_Progress {...args} />
}

export const Progress = Template.bind({})
Progress.args = {
  type: 'linear',
  size: 'large',
  percent: 30,
  noText: false,
  dimension: '',
  loop: false
}
