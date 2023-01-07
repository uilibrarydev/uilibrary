import React, { useState } from 'react'
import { TSimpleDatePickerProps } from '../../types/globals'
import Text from '../Text'
import DatePicker, { registerLocale } from 'react-datepicker'
import hy from 'date-fns/locale/hy'
import Input from '../Input'
import './index.scss'

registerLocale('hy', hy)

const TimePicker = (props: TSimpleDatePickerProps): JSX.Element => {
  const { value = new Date(), onChange, label } = props
  const [currentTime, setCurrentTime] = useState(value)

  const changeHandler = (date: Date) => {
    setCurrentTime(date)
    onChange(date)
  }

  return (
    <div className="picker-container">
      {label && (
        <Text color="labelGray" className="label">
          {label}
        </Text>
      )}

      <DatePicker
        selected={currentTime}
        locale="hy"
        onChange={changeHandler}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
        customInput={
          <div className="date-picker_input-container">
            <Input value={currentTime.toString()} />
          </div>
        }
      />
    </div>
  )
}

export default TimePicker
