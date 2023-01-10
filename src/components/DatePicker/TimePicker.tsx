import React, { useState } from 'react'
import moment from 'moment'
import Text from '../Text'
import DatePicker, { registerLocale } from 'react-datepicker'
import hy from 'date-fns/locale/hy'
import Input from '../Input'
import { ISimpleDatePickerProps } from './types'

import './index.scss'

registerLocale('hy', hy)

const TimePicker = (props: ISimpleDatePickerProps): JSX.Element => {
  const { formValue = new Date(), currentTime = new Date(), onChange, label } = props
  const dateInitialValue =
    formValue !== undefined && Object.prototype.toString.call(formValue) === '[object Date]'
      ? formValue
      : currentTime
  const [selectedTime, setCurrentTime] = useState(dateInitialValue)

  const changeHandler = (date: Date) => {
    console.log('event', date)

    setCurrentTime(date)
    if (onChange) {
      onChange(date)
    }
  }

  return (
    <div className="picker-container">
      {label && (
        <Text color="labelGray" className="label">
          {label}
        </Text>
      )}

      <DatePicker
        selected={moment.isDate(selectedTime) ? selectedTime : new Date()}
        locale="hy"
        onChange={changeHandler}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
        customInput={
          <div className="date-picker_input-container">
            <Input value={selectedTime && selectedTime.toString()} />
          </div>
        }
      />
    </div>
  )
}

export default TimePicker
