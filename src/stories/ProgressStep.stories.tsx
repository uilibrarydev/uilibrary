import React, { useState } from 'react'
import { Button, ProgressStep as ProgressStepComp } from '../components'
import { TStepValue } from '../components/ProgressStep/types'

export default {
  title: 'ProgressStep',
  component: ProgressStepComp,
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
  const [completedValues, setCompletedValues] = useState<TStepValue[]>([])
  const changeStep = (step) => {
    setActiveStep(step)
    setCompletedValues((_completedValues) => [..._completedValues, activeStep])
  }

  return (
    <div style={{ width: 300, height: 300 }}>
      <ProgressStepComp
        {...args}
        activeStep={activeStep}
        setActiveStep={changeStep}
        completedValues={completedValues}
      />

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
  stepSize: 'large',
  steps: [
    {
      value: 1,
      label: 'label1',
      subText: 'Subtext1'
    },
    {
      value: 2,
      label: 'label2',
      subText: 'Subtext2'
    },
    {
      value: 3,
      label: 'label3',
      subText: 'Subtext3'
    }
  ]
}
