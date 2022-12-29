import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'

import hy from 'date-fns/locale/hy'
registerLocale('hy', hy)

import './index.scss'
const CustomDatePicker = (props: IDatePickerProps): JSX.Element => {
  const { timeOnly, value = new Date(), onChange } = props

  const changeHandler = (date: Date) => {
    onChange(date)
  }
  if (timeOnly) {
    return (
      <DatePicker
        selected={value}
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

  return <DatePicker onChange={changeHandler} selected={value} locale="hy" />
}

export default CustomDatePicker
