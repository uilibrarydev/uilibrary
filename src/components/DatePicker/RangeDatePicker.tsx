import React, { useState } from 'react'
import moment from 'moment'
import DatePicker, { registerLocale } from 'react-datepicker'
import hy from 'date-fns/locale/hy'
import Input from '../Input'
import { IRangeDatePickerProps } from './types'

import './index.scss'

registerLocale('hy', hy)

const RangeDatePicker = (props: IRangeDatePickerProps): JSX.Element | null => {
  const { value, currentDates = [], setFieldValue, name, changeHandler, format } = props

  const dateInitialValue = value !== undefined && Array.isArray(value) ? value : currentDates

  const [rangeArray, setRangeDate] = useState(dateInitialValue)
  const onChange = (date: TRangePickerValues): void => {
    if (date && Array.isArray(date)) {
      setRangeDate(date)
      if (changeHandler) {
        changeHandler(date)
      }
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
      startDate={rangeArray[0] as Date}
      endDate={rangeArray[1] as Date}
      selectsRange
      onChange={onChange}
      customInput={
        <div className="date-picker_input-container">
          <Input
            currentValue={`${moment(rangeArray[0]).format('MMMM d, YYYY')}  - ${moment(
              rangeArray[1]
            ).format(format)}`}
          />
        </div>
      }
    />
  )
}

export default RangeDatePicker
