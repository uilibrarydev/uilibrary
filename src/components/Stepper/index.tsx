import React, { useState } from 'react'
import { TStepperProps } from './types'

const Stepper = (props: TStepperProps): JSX.Element => {
  const { list } = props

  const [activeStepIndex, setActiveStepIndex] = useState(0)

  const decreaseStepIndex = () => {
    setActiveStepIndex(activeStepIndex - 1)
  }

  const increaseStepIndex = () => {
    setActiveStepIndex(activeStepIndex + 1)
  }

  const Content = list[activeStepIndex]

  return (
    <div>
      <Content
        activeStepIndex={activeStepIndex}
        isNextDisabled={activeStepIndex === list.length - 1}
        isPrevDisabled={activeStepIndex === 0}
        prevHandler={decreaseStepIndex}
        nextHandler={increaseStepIndex}
        stepCount={list.length}
      />
    </div>
  )
}

export default Stepper
