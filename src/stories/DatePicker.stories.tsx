import React, { useState } from 'react'
import { CustomDatePicker as DatePickerComp } from '../components'

export default {
  title: 'DatePicker',
  component: DatePickerComp
}

const Template = (): JSX.Element => {
  return (
    <div>
      <DatePickerComp />
    </div>
  )
}
export const Dialog = Template.bind({})
