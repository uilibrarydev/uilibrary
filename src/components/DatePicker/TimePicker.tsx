import React, { useState } from 'react'
import { TSimpleDatePickerProps } from '../../types/globals'
import DatePicker, { registerLocale } from 'react-datepicker'
import hy from 'date-fns/locale/hy'
import './index.scss'

registerLocale('hy', hy)

const TimePicker = (props: TSimpleDatePickerProps): JSX.Element => {
  const { value = new Date(), onChange } = props
  const [currentTime, setCurrentTime] = useState(value)

  const changeHandler = (date: Date) => {
    setCurrentTime(date)
    onChange(date)
  }

  return (
    <DatePicker
      selected={currentTime}
      locale="hy"
      onChange={changeHandler}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
    />
  )
}

export default TimePicker
