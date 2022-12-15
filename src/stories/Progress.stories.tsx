import React from 'react'
import { Progress as ProgressComp } from '../components'

export default {
  title: 'Progress',
  component: ProgressComp
}

const Template = (): JSX.Element => {
  return <ProgressComp percent={50} />
}
export const Progress = Template.bind({})
