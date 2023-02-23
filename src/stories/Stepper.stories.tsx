import React from 'react'
import { Stepper as StepperComp } from '../components'

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

const LIST = [COMP1, COMP2, COMP3, COMP4]

const Template = (): JSX.Element => {
  return <StepperComp list={LIST} initialActiveIndex={2} />
}
export const Stepper = Template.bind({})
