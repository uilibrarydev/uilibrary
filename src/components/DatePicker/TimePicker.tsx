import React, { useState } from 'react'
import moment from 'moment'
import DatePicker, { registerLocale } from 'react-datepicker'
import hy from 'date-fns/locale/hy'
import Input from '../Input'
import { ITimePickerProps } from './types'

import './index.scss'
import Label from '../../helperComponents/Label'

registerLocale('hy', hy)

const TimePicker = (props: ITimePickerProps): JSX.Element => {
  const {
    value,
    currentTime,
    name,
    setFieldValue,
    label,
    changeHandler,
    required,
    format = 'h:mm a',
    ...rest
  } = props
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

  return (
    <div className="picker-container">
      <Label text={label} required={required} />

      <DatePicker
        selected={moment.isDate(selectedTime) ? selectedTime : new Date()}
        locale="hy"
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
        {...rest}
        onChange={onChange}
        customInput={
          <div className="date-picker_input-container">
            <Input
              currentValue={selectedTime ? moment(selectedTime.toString()).format(format) : ''}
            />
          </div>
        }
      />
    </div>
  )
}

export default TimePicker
