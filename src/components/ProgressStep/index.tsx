import React, { ReactElement } from 'react'

import { Step } from './Step'

import { TProgressStepProps } from './types'
import '../../assets/styles/components/_progresStepper.scss'
import classnames from "classnames";

export const ProgressStep = (props: TProgressStepProps): ReactElement | null => {
  const { steps, stepType, activeStep, setActiveStep, completedValues, stepSize = 'large', stepDirection= 'horizontal' } = props

  return (
    <div className={classnames('progress-stepper', `progress-stepper--${stepDirection}`)}>
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
