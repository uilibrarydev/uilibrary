import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'
import { Input } from '../Input'
import { DateFormat, IRangeDatePickerProps, TRangePickerValues } from './types'
import { useImportFilesDynamically } from './hooks'
import { isSameDay } from '../../utils/helpers'
import {Label} from '../../helperComponents';

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
    placeholderText,
      label,
      hasError,
      required
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
    setRangeDate(dateInitialValue)
  }, [dateInitialValue])

  if (!Array.isArray(rangeArray)) {
    return null
  }

  const formatDate = (date: Date | undefined): string => {
    return date ? dayjs(date).format(format) : ''
  }
  const checkRange = () => {
    const [startDate, endDate] = rangeArray
    if (!startDate || !endDate) {
      onChange([null, null])
    }
  }

  const renderCurrentSelectedDate = (rangeArray: (Date | undefined)[]) => {
    const [startDate, endDate] = rangeArray
    const startDateFormatted = formatDate(startDate)
    const endDateFormatted = formatDate(endDate)

    if (isSameDay(startDate, endDate) || !rangeArray[1]) {
      return startDateFormatted
    }

    return `${startDateFormatted} - ${endDateFormatted}`
  }

  return (
    <div className="picker-container input__inner">
      <Label text={label} required={required} invalid={hasError} />
      <DatePicker
          locale={locale}
          minDate={minDate}
          maxDate={maxDate}
          startDate={rangeArray[0] as Date}
          endDate={rangeArray[1] as Date}
          selectsRange
          disabled={disabled}
          onChange={onChange}
          onClickOutside={checkRange}
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
    </div>
  )
}
