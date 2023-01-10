import React, { useState } from 'react'
import {
  SimpleDatePicker as SimpleDatePicker_,
  TimePicker as TimePicker_,
  RangeDatePicker as RangeDatePicker_
} from '../components'
import { TRangePickerValues } from '../types/globals'

export default {
  title: 'DatePicker',
  component: SimpleDatePicker_
}

const SimplePicker = (): JSX.Element => {
  const [value, setValue] = useState<Date>(new Date())

  return (
    <div style={{ width: 300 }}>
      <SimpleDatePicker_ value={value} changeHandler={setValue} />
    </div>
  )
}
export const SimpleDatePicker = SimplePicker.bind({})

const TimeDatePicker = (): JSX.Element => {
  const [value, setValue] = useState<Date>(new Date())

  return (
    <div style={{ width: 300 }}>
      <TimePicker_ value={value} changeHandler={setValue} />
    </div>
  )
}
export const TimePicker = TimeDatePicker.bind({})

const RangePicker = (): JSX.Element => {
  const [value, setValue] = useState<TRangePickerValues>([new Date(), new Date()])

  return (
    <div style={{ width: 300 }}>
      <RangeDatePicker_ value={value} changeHandler={setValue} />
    </div>
  )
}
export const RangeDatePicker = RangePicker.bind({})
