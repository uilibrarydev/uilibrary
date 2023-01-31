import React, { useState } from 'react'
import moment from 'moment'
import DatePicker, { registerLocale } from 'react-datepicker'
import Text from '../Text'
import hy from 'date-fns/locale/hy'
import Input from '../Input'
import { ISimpleDatePickerProps } from './types'

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
      setFieldValue(name, date, { shouldValidate: true })
    }
    if (changeHandler) {
      changeHandler(date)
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
        selected={moment.isDate(selectedDate) ? selectedDate : new Date()}
        locale="hy"
        customInput={
          <div className="date-picker_input-container">
            <Input
              currentValue={selectedDate ? moment(selectedDate.toString()).format(format) : ''}
            />
          </div>
        }
        {...rest}
        onChange={onChange}
      />
    </div>
  )
}

export default SimpleDatePicker
