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

const CURRENT_YEAR = new Date().getFullYear()

const getAllLastdays = () => {
  const arr: Date[] = []

  for (let month = 0; month <= 12; month++) {
    const lastDayDate = new Date(CURRENT_YEAR, month + 1, 0)
    const lastDayOfMonth = lastDayDate.getDate()

    for (let day = 25; day <= lastDayOfMonth; day++) {
      arr.push(new Date(CURRENT_YEAR, month, day))
    }
  }
  return arr
}

const SimplePicker = (): JSX.Element => {
  const [value, setValue] = useState<Date | undefined>(undefined)

  return (
    <div style={{ width: 300 }}>
      <SimpleDatePicker_
        value={value}
        changeHandler={setValue}
        format="DD"
        label="ddd"
        excludeDates={getAllLastdays()}
        minDate={new Date(new Date().setDate(new Date().getDate() + 15))}
        maxDate={new Date(new Date().setDate(new Date().getDate() + 60))}
      />
    </div>
  )
}
export const SimpleDatePicker = SimplePicker.bind({})

const TimeDatePicker = (): JSX.Element => {
  const [value1, setValue1] = useState<Date>(new Date())
  const [value2, setValue2] = useState<Date>(new Date())
  const filterPassedTime = (time) => {
    // const currentDate = value1
    const selectedDate = new Date(time)
    return value1.getTime() < selectedDate.getTime()
  }
  return (
    <div style={{ width: 300 }}>
      <TimePicker_ value={value1} changeHandler={setValue1} />
      <TimePicker_ value={value2} changeHandler={setValue2} filterTime={filterPassedTime} />
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
