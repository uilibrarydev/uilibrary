import React from 'react'
import { Progress as ProgressComp } from '../components'

export default {
  title: 'Progress',
  component: ProgressComp,
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
  return <ProgressComp {...args} />
}

export const Progress = Template.bind({})
Progress.args = {
  type: 'linear',
  size: 'large',
  percent: 30,
  noText: false,
  dimension: ''
}
