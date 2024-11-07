import React from 'react'
import { Progress as _Progress } from '../index'
import { ProgressBar as _ProgressBar } from '../index'
import { StoryFn } from '@storybook/react'
import {TProgressBarPropTypes, TProgressPropTypes} from '../components/Progress/types'
import { CodeBlock } from '../helperComponents'

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

const designSpecs = `
// With steps
<Progress
  currentStep={2}
  stepCount={3}
/>
// With percent
<Progress
  percent={30}
/>
// With circle type
<Progress
  percent={30}
  type: 'circle'
/>
`

const Template: StoryFn<TProgressPropTypes> = (args) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <_Progress {...args} />
      <CodeBlock title="Design Specs Example">{designSpecs}</CodeBlock>
    </div>
  )
}

export const Progress = Template.bind({})
Progress.args = {
  type: 'linear',
  size: 'large',
  percent: 30,
  noText: false,
  hasError: false,
  dimension: 0,
  loop: false
}

const ITEMS = [
  {
    percent: 30,
  },
  {
    percent: 0,
  },
  {
    percent: 0,
  },
]


const ProgressBarTemplate: StoryFn<TProgressBarPropTypes> = (args) => {
  return (
      <div style={{ width: '60%' }}>
        <_ProgressBar {...args} stepItems={ITEMS}/>
      </div>
  )
}

export const ProgressBar = ProgressBarTemplate.bind({})

ProgressBar.args = {

}
