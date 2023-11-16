import React, { useState } from 'react'
import moment from 'moment'
import DatePicker, { registerLocale } from 'react-datepicker'
import hy from 'date-fns/locale/hy'
import Input from '../Input'
import { DateFormat, IRangeDatePickerProps } from './types'

import './index.scss'

registerLocale('hy', hy)

const RangeDatePicker = (props: IRangeDatePickerProps): JSX.Element | null => {
  const { value, currentDates = [], setFieldValue, name, changeHandler, format, maxDate } = props

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

  const formatDate = (date: Date | undefined, format: string): string => {
    return date ? moment(date).format(format) : '';
  };

  const renderCurrentSelectedDate = (rangeArray: (Date | undefined)[]) => {
    return rangeArray[1]
      ? `${formatDate(rangeArray[0], DateFormat.LongDate)} - ${formatDate(rangeArray[1], DateFormat.LongDate)}`
      : `${formatDate(rangeArray[0], DateFormat.LongDate)}`;
  }

  return (
    <DatePicker
      startDate={rangeArray[0] as Date}
      endDate={rangeArray[1] as Date}
      maxDate={maxDate}
      selectsRange
      onChange={onChange}
      customInput={
        <div className="date-picker_input-container">
          <Input
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            currentValue={renderCurrentSelectedDate(rangeArray)}
          />
        </div>
      }
    />
  )
}

export default RangeDatePicker
