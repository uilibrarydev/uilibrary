import React, { ReactElement } from 'react'

import { Step } from './Step'

import { TProgressStepProps } from './types'
import '../../assets/styles/components/_progresStepper.scss'

export const ProgressStep = (props: TProgressStepProps): ReactElement | null => {
  const { steps, stepType, activeStep, setActiveStep, completedValues, stepSize = 'large' } = props

  return (
    <div className="progress_steper">
      {steps.map((step, index) => {
        const isFirstStep = index === 0
        const isLastStep = index === steps.length - 1

        return (
          <Step
            step={step}
            index={index}
            key={step.value}
            activeStep={activeStep}
            onStepClick={setActiveStep}
            stepType={stepType}
            stepSize={stepSize}
            hasLeftLine={!isFirstStep}
            hasRightLine={!isLastStep}
            completedValues={completedValues}
          />
        )
      })}
    </div>
  )
}
