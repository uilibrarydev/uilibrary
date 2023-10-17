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
    <div style={{ width: 300 }}>
      <ProgressStepComp
        {...args}
        activeStep={activeStep}
        setActiveStep={changeStep}
        completedValues={completedValues}
      />

      <Button buttonText={'back'} type="secondary" />
      <Button buttonText={'next'} type="primary" onClick={() => changeStep(2)} />
    </div>
  )
}

export const ProgressStep = Template.bind({})

ProgressStep.args = {
  stepType: 'number',
  steps: [
    {
      value: 1,
      label: 'label1'
    },
    {
      value: 2,
      label: 'label2'
    },
    {
      value: 3,
      label: 'label3'
    }
  ]
}
