import React, { useState } from 'react'
import moment from 'moment'
import DatePicker, { registerLocale } from 'react-datepicker'
import hy from 'date-fns/locale/hy'
import Input from '../Input'
import { ISimpleDatePickerProps } from './types'
import Label from '../../helperComponents/Label'

registerLocale('hy', hy)

const SimpleDatePicker = (props: ISimpleDatePickerProps): JSX.Element => {
  const {
    value,
    currentDate,
    setFieldValue,
    name,
    label,
    changeHandler,
    format = 'M/D/YYYY',
    required = false,
    error,
    ...rest
  } = props

  const dateInitialValue =
    value !== undefined && Object.prototype.toString.call(value) === '[object Date]'
      ? value
      : currentDate

  const [selectedDate, setSelectedDate] = useState(dateInitialValue)

  const onChange = (date: Date) => {
    setSelectedDate(date)

    if (setFieldValue && name) {
      setFieldValue(name, date)
    }
    if (changeHandler) {
      changeHandler(date)
    }
  }

  return (
    <div className="picker-container">
      <Label text={label} required={required} invalid={!!error} />

      <DatePicker
        selected={moment.isDate(selectedDate) ? selectedDate : undefined}
        locale="hy"
        customInput={
          <Input
            rightIconProps={{ name: 'calendar' }}
            currentValue={selectedDate ? moment(selectedDate.toString()).format(format) : ''}
          />
        }
        {...rest}
        onChange={onChange}
      />
    </div>
  )
}

export default SimpleDatePicker
