import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
const CustomDatePicker = (props: IDatePickerProps): JSX.Element => {
  const { timeOnly, value = new Date(), onChange } = props

  const changeHandler = (date: Date) => {
    onChange(date)
  }

  if (timeOnly) {
    return (
      <DatePicker
        selected={value}
        onChange={changeHandler}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
    )
  }

  return <DatePicker onChange={changeHandler} selected={value} />
}

export default CustomDatePicker
