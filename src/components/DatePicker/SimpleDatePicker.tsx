import React, { useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { TSimpleDatePickerProps } from '../../types/globals'
import hy from 'date-fns/locale/hy'
import './index.scss'

registerLocale('hy', hy)

const SimpleDatePicker = (props: TSimpleDatePickerProps): JSX.Element => {
  const { value = new Date(), onChange } = props
  const [currentDate, setValue] = useState(value)

  const changeHandler = (date: Date) => {
    setValue(date)
    onChange(date)
  }

  return <DatePicker selected={currentDate} locale="hy" onChange={changeHandler} />
}

export default SimpleDatePicker
