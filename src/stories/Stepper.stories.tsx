import React from 'react'
import { Stepper as _Stepper } from '../index'

export default {
  title: 'Stepper',
  component: _Stepper
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
  return <_Stepper list={LIST} />
}
export const Stepper = Template.bind({})
