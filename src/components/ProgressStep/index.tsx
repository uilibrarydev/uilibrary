import React, { ReactElement, useState } from 'react'
import classnames from 'classnames'

import { useGetElemSizes } from '../../hooks'
import { Step } from './Step'

import { TProgressStepProps } from './types'
import '../../assets/styles/components/_progresStepper.scss'

export const ProgressStep = (props: TProgressStepProps): ReactElement | null => {
  const {
    steps,
    stepType,
    activeStep,
    setActiveStep,
    stepSize = 'large',
    stepDirection = 'horizontal'
  } = props

  const singleStepWidth = `${100 / steps.length}%`

  return (
    <div className={classnames('progress-stepper', `progress-stepper--${stepDirection}`)}>
      {steps.map((step, index) => {
        return (
          <Step
            width={stepDirection == 'horizontal' ? singleStepWidth : '100%'}
            step={step}
            index={index}
            key={step.value}
            activeStep={activeStep}
            onStepClick={setActiveStep}
            stepType={stepType}
            stepSize={stepSize}
          />
        )
      })}
    </div>
  )
}
