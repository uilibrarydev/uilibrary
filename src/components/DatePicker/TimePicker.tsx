import React, { useState } from 'react'
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'
import { Input } from '../Input'
import { ITimePickerProps } from './types'
import { Label } from '../../helperComponents'
import { useImportFilesDynamically } from './hooks'

export const TimePicker = (props: ITimePickerProps): JSX.Element => {
  const {
    value,
    currentTime,
    name,
    setFieldValue,
    label,
    changeHandler,
    required,
    locale = 'hy',
    format = 'h:mm a',
    dayjsLocale = 'hy-am',
    placeholderText,
    ...rest
  } = props
  const dateInitialValue =
    value !== undefined && Object.prototype.toString.call(value) === '[object Date]'
      ? value
      : currentTime
  const [selectedTime, setCurrentTime] = useState(dateInitialValue)

  useImportFilesDynamically(dayjsLocale)

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
        selected={dayjs(selectedTime).isValid() ? selectedTime : new Date()}
        locale={locale}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat={format}
        {...rest}
        onChange={onChange}
        customInput={
          <div className="date-picker_input-container">
            <Input
              placeholder={placeholderText}
              currentValue={selectedTime ? dayjs(selectedTime.toString()).format(format) : ''}
            />
          </div>
        }
      />
    </div>
  )
}
