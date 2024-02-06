import React, { useState } from 'react'
import { Button, ProgressStep as _ProgressStep } from '../index'
import { TSteps, TStepValue } from '../components/ProgressStep/types'
import { PROGRESS_STATUSES } from '../components/ProgressStep/consts'

const STEPS = [
  {
    value: 1,
    label: 'label1 label1 label1 label1',
    subText: 'Subtext1',
    status: PROGRESS_STATUSES.initial
  },
  {
    value: 2,
    label: 'label2',
    subText: 'Subtext2',
    status: PROGRESS_STATUSES.initial
  },
  {
    value: 3,
    label: 'label3',
    subText: 'Subtext3',

    status: PROGRESS_STATUSES.initial
  }
]
export default {
  title: 'ProgressStep',
  component: _ProgressStep,
  argTypes: {
    stepType: {
      options: ['number', 'dot'],
      control: { type: 'radio' }
    },
    stepDirection: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' }
    },
    stepSize: {
      options: ['large', 'small'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => {
  const [activeStep, setActiveStep] = useState<TStepValue>(1)
  const [steps, setSteps] = useState<TSteps>(STEPS)

  const changeStep = (stepValue) => {
    setActiveStep(stepValue)

    const modified = steps.map((stepItem) => {
      if (stepItem.value === activeStep) {
        return {
          ...stepItem,
          status: PROGRESS_STATUSES.completed
        }
      }
      return stepItem
    })
    setSteps(modified)
  }

  return (
    <div style={{ width: 500 }}>
      <_ProgressStep {...args} steps={steps} activeStep={activeStep} setActiveStep={changeStep} />

      <div className="mt-40">
        <Button buttonText={'back'} type="secondary" className="mr-8" />
        <Button buttonText={'next'} type="primary" onClick={() => changeStep(2)} />
      </div>
    </div>
  )
}

export const ProgressStep = Template.bind({})

ProgressStep.args = {
  stepType: 'number',
  stepDirection: 'horizontal',
  stepSize: 'large'
}
