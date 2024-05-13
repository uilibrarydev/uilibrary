import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'
import { Input } from '../Input'
import { DateFormat, IRangeDatePickerProps, TRangePickerValues } from './types'
import { useImportFilesDynamically } from './hooks'

export const RangeDatePicker = (props: IRangeDatePickerProps): JSX.Element | null => {
  const {
    value,
    currentDates = [],
    setFieldValue,
    name,
    changeHandler,
    dataId,
    format = DateFormat.LongDate,
    maxDate,
    minDate,
    locale = 'hy',
    dayjsLocale = 'hy-am',
    disabled,
    placeholderText
  } = props

  useImportFilesDynamically(dayjsLocale)

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

  useEffect(() => {
    if (dateInitialValue) {
      setRangeDate(dateInitialValue)
    }
  }, [dateInitialValue])

  if (!Array.isArray(rangeArray)) {
    return null
  }

  const formatDate = (date: Date | undefined): string => {
    return date ? dayjs(date).format(format) : ''
  }

  const renderCurrentSelectedDate = (rangeArray: (Date | undefined)[]) => {
    return rangeArray[1]
      ? `${formatDate(rangeArray[0])} - ${formatDate(rangeArray[1])}`
      : `${formatDate(rangeArray[0])}`
  }

  return (
    <DatePicker
      locale={locale}
      minDate={minDate}
      maxDate={maxDate}
      startDate={rangeArray[0] as Date}
      endDate={rangeArray[1] as Date}
      selectsRange
      disabled={disabled}
      onChange={onChange}
      customInput={
        <div className="date-picker_input-container">
          <Input
            dataId={dataId}
            disabled={disabled}
            placeholder={placeholderText}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            currentValue={renderCurrentSelectedDate(rangeArray)}
          />
        </div>
      }
    />
  )
}
