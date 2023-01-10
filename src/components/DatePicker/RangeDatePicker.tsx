import React, { useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import hy from 'date-fns/locale/hy'
import Input from '../Input'
import { TRangeDatePickerProps } from './types'

import './index.scss'
import { TRangePickerValues } from '../../types/globals'
registerLocale('hy', hy)

const RangeDatePicker = (props: TRangeDatePickerProps): JSX.Element | null => {
  const { value, currentDates = [], setFieldValue, name } = props

  const dateInitialValue = value !== undefined && Array.isArray(value) ? value : currentDates

  const [rangeArray, setRangeDate] = useState(dateInitialValue)
  const changeHandler = (date: TRangePickerValues): void => {
    if (date && Array.isArray(date)) {
      setRangeDate(date)
      if (setFieldValue && name) {
        setFieldValue(name, date)
      }
    }
  }

  if (!Array.isArray(rangeArray)) {
    return null
  }
  return (
    <DatePicker
      startDate={rangeArray[0]}
      endDate={rangeArray[1]}
      selectsRange
      onChange={changeHandler}
      customInput={
        <div className="date-picker_input-container">
          <Input />
        </div>
      }
    />
  )
}

export default RangeDatePicker
