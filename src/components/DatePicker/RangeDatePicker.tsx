import React, { useState } from 'react'
import { TRangeDatePickerProps } from '../../types/globals'
import DatePicker, { registerLocale } from 'react-datepicker'

import hy from 'date-fns/locale/hy'
registerLocale('hy', hy)

import './index.scss'
import Input from '../Input'

const RangeDatePicker = (props: TRangeDatePickerProps): JSX.Element => {
  const { value = [new Date(), new Date()], onChange } = props
  const [rangeArray, setRangeDate] = useState<[Date | null, Date | null]>(value)
  const changeHandler = (date: [Date | null, Date | null]): void => {
    if (date && Array.isArray(date)) {
      setRangeDate(date)
      onChange(date)
    }
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
