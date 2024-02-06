import React, { useEffect, useState } from 'react'
import { TStepperProps } from './types'

export const Stepper = (props: TStepperProps): JSX.Element => {
  const { list, activeStep = 0, setActiveStep } = props

  const [activeStepIndex, setActiveStepIndex] = useState(activeStep)

  const decreaseStepIndex = () => {
    let newIndex = activeStepIndex
    --newIndex
    setActiveStepIndex(newIndex)
    if (setActiveStep) {
      setActiveStep(newIndex)
    }
  }

  const increaseStepIndex = () => {
    let newIndex = activeStepIndex
    ++newIndex
    setActiveStepIndex(newIndex)
    if (setActiveStep) {
      setActiveStep(newIndex)
    }
  }

  useEffect(() => {
    if (activeStep && activeStep !== activeStepIndex) {
      setActiveStepIndex(activeStep)
    }
  }, [activeStep, activeStepIndex])

  const Content = list[activeStepIndex]

  return (
    <Content
      activeStepIndex={activeStepIndex}
      isNextDisabled={activeStepIndex === list.length - 1}
      isPrevDisabled={activeStepIndex === 0}
      prevHandler={decreaseStepIndex}
      nextHandler={increaseStepIndex}
      stepCount={list.length}
    />
  )
}
