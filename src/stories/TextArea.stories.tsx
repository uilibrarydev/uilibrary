import React from 'react'
import { TextArea as TextAreaComp } from '../components'

export default {
  title: 'TextArea',
  component: TextAreaComp
}
const Template = (): JSX.Element => {
  return (
    <div style={{ width: 300 }}>
      <TextAreaComp
        label="teaxt area"
        onChange={(e) => {
          console.log(e)
        }}
        className=""
      />
    </div>
  )
}

export const TextArea = Template.bind({})
