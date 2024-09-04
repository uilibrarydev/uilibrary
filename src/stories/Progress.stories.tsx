import React from 'react'
import { Progress as _Progress } from '../index'
import { StoryFn } from '@storybook/react'
import { TProgressPropTypes } from '../components/Progress/types'

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

const Template: StoryFn<TProgressPropTypes> = (args) => {
  return <_Progress {...args} />
}

export const Progress = Template.bind({})
Progress.args = {
  type: 'linear',
  size: 'large',
  percent: 30,
  noText: false,
  dimension: 0,
  loop: false
}
