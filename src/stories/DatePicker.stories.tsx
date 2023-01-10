import React, { useState } from 'react'
import { SimpleDatePicker as DatePickerComp } from '../components'

export default {
  title: 'DatePicker',
  component: DatePickerComp
}

const Template = (): JSX.Element => {
  const [value, setValue] = useState<Date>(new Date())

  return (
    <div style={{ width: 300 }}>
      <DatePickerComp value={value} changeHandler={setValue} />
    </div>
  )
}
export const Dialog = Template.bind({})
