import React, { useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { TSimpleDatePickerProps } from '../../types/globals'
import Text from '../Text'
import hy from 'date-fns/locale/hy'
import Input from '../Input'

registerLocale('hy', hy)

const SimpleDatePicker = (props: TSimpleDatePickerProps): JSX.Element => {
  const { value = new Date(), onChange, label } = props
  const [currentDate, setValue] = useState(value)

  const changeHandler = (date: Date) => {
    setValue(date)
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
        selected={currentDate}
        locale="hy"
        onChange={changeHandler}
        customInput={
          <div className="date-picker_input-container">
            <Input />
          </div>
        }
      />
    </div>
  )
}

export default SimpleDatePicker
