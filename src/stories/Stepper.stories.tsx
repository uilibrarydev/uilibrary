import React from 'react'
import { Button, Stepper as StepperComp } from '../components'
import { TStepperContentWrapperProps } from '../components/Stepper/types'

export default {
  title: 'Stepper',
  component: StepperComp
}

const COMP1 = () => {
  return <div>STEP1</div>
}

const COMP2 = () => {
  return <div>STEP2</div>
}
const COMP3 = () => {
  return <div>STEP3</div>
}
const COMP4 = () => {
  return <div>STEP4</div>
}

const Wrapper = (props: TStepperContentWrapperProps) => {
  const { children, isNextDisabled, isPrevDisabled, prevHandler, nextHandler } = props

  return (
    <div>
      progress/header
      <div>{children}</div>
      <Button buttonText="Next" onClick={prevHandler} type="secondary" disabled={isPrevDisabled} />
      <Button buttonText="Next" onClick={nextHandler} type="primary" disabled={isNextDisabled} />
    </div>
  )
}

const LIST = [COMP1, COMP2, COMP3, COMP4]

const Template = (): JSX.Element => {
  return <StepperComp list={LIST} wrapper={Wrapper} />
}
export const Stepper = Template.bind({})
