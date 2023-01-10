import React, { useState } from 'react'
import moment from 'moment'
import Text from '../Text'
import DatePicker, { registerLocale } from 'react-datepicker'
import hy from 'date-fns/locale/hy'
import Input from '../Input'
import { ITimePickerProps } from './types'

import './index.scss'

registerLocale('hy', hy)

const TimePicker = (props: ITimePickerProps): JSX.Element => {
  const { value, currentTime, name, setFieldValue, label, changeHandler } = props
  const dateInitialValue =
    value !== undefined && Object.prototype.toString.call(value) === '[object Date]'
      ? value
      : currentTime
  const [selectedTime, setCurrentTime] = useState(dateInitialValue)

  const onChange = (date: Date) => {
    setCurrentTime(date)

    if (changeHandler) {
      changeHandler(date)
    }
    if (setFieldValue && name) {
      setFieldValue(name, date)
    }
  }
  console.log('selectedTime', selectedTime)

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
        onChange={onChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
        customInput={
          <div className="date-picker_input-container">
            <Input currentValue={selectedTime ? selectedTime.toString() : ''} />
          </div>
        }
      />
    </div>
  )
}

export default TimePicker
