import React, { useState } from 'react'
import moment from 'moment'
import DatePicker, { registerLocale } from 'react-datepicker'
import Text from '../Text'
import hy from 'date-fns/locale/hy'
import Input from '../Input'
import { ISimpleDatePickerProps } from './types'

registerLocale('hy', hy)

const SimpleDatePicker = (props: ISimpleDatePickerProps): JSX.Element => {
  const { formValue, currentDate = new Date(), onChange, label } = props
  const dateInitialValue =
    formValue !== undefined && Object.prototype.toString.call(formValue) === '[object Date]'
      ? formValue
      : currentDate
  const [selectedDate, setSelectedDate] = useState(dateInitialValue)

  const changeHandler = (date: Date) => {
    setSelectedDate(date)
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
        selected={moment.isDate(selectedDate) ? selectedDate : new Date()}
        locale="hy"
        onChange={changeHandler}
        customInput={
          <div className="date-picker_input-container">
            <Input value={currentDate ? currentDate.toString() : ''} />
          </div>
        }
      />
    </div>
  )
}

export default SimpleDatePicker
