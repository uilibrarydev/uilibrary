import React, { useState } from 'react'
import { TStepperProps } from './types'

const Stepper = (props: TStepperProps): JSX.Element => {
  const { list, initialActiveIndex = 0 } = props

  const [activeStepIndex, setActiveStepIndex] = useState(initialActiveIndex)

  const decreaseStepIndex = () => {
    setActiveStepIndex(activeStepIndex - 1)
  }

  const increaseStepIndex = () => {
    setActiveStepIndex(activeStepIndex + 1)
  }

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

export default Stepper
