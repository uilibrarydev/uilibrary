import React, { useState } from 'react'
import {
  SimpleDatePicker as _SimpleDatePicker,
  TimePicker as _TimePicker,
  RangeDatePicker as _RangeDatePicker
} from '../index'

export default {
  title: 'DatePicker',
  component: _SimpleDatePicker
}

const CURRENT_YEAR = new Date().getFullYear()

const getAllLastDays = () => {
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
      <_SimpleDatePicker
        value={value}
        changeHandler={setValue}
        format="DD"
        label="ddd"
        excludeDates={getAllLastDays()}
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
      <_TimePicker value={value1} changeHandler={setValue1} />
      <_TimePicker value={value2} changeHandler={setValue2} filterTime={filterPassedTime} />
    </div>
  )
}
export const TimePicker = TimeDatePicker.bind({})

const RangePicker = (): JSX.Element => {
  const [value, setValue] = useState<any>([new Date(), new Date()])

  return (
    <div style={{ width: 300 }}>
      <_RangeDatePicker value={value} changeHandler={setValue} maxDate={new Date()} locale={'hy'} />
    </div>
  )
}
export const RangeDatePicker = RangePicker.bind({})
