import React, { useCallback, useState } from 'react'
import { TStepperProps } from './types'

const Stepper = (props: TStepperProps): JSX.Element => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0)

  const Fragment = ({ children }: { children: JSX.Element }) => {
    return <>{children}</>
  }

  const decreaseStepIndex = useCallback(() => {
    setActiveStepIndex((activeStepIndex: number) => activeStepIndex - 1)
  }, [])

  const increaseStepIndex = useCallback(() => {
    setActiveStepIndex((activeStepIndex) => activeStepIndex + 1)
  }, [])

  const { list } = props
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
