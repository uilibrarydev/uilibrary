import React, { useEffect, useRef, useState } from 'react'
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'
import { Input } from '../Input'
import { DateFormat, IRangeDatePickerProps, TRangePickerValues } from './types'
import { useImportFilesDynamically } from './hooks'
import { isSameDay } from '../../utils/helpers'
import { Label } from '../../helperComponents'
import IconCalendarRight from '../SVGIcons/IconCalendarRight'

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
    required,
    ...rest
  } = props

  useImportFilesDynamically(dayjsLocale)

  const dateInitialValue = value !== undefined && Array.isArray(value) ? value : currentDates
  const [rangeArray, setRangeDate] = useState(dateInitialValue)
  const calendarRef = useRef<{
    isCalendarOpen: () => boolean
    setOpen: (isOpen: boolean) => void | null
  }>(null)

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

  const openDatepicker = () => {
    if (calendarRef.current) {
      const isOpen = calendarRef.current?.isCalendarOpen()
      calendarRef.current?.setOpen(!isOpen)
    }
  }

  return (
    <div className="picker-container input__inner">
      <Label text={label} required={required} invalid={hasError} />
      <DatePicker
        {...rest}
        locale={locale}
        minDate={minDate}
        maxDate={maxDate}
        startDate={rangeArray[0] as Date}
        endDate={rangeArray[1] as Date}
        selectsRange
        disabled={disabled}
        onChange={onChange}
        onClickOutside={checkRange}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={calendarRef}
        customInput={
          <div className="date-picker_input-container">
            <Input
              dataId={dataId}
              disabled={disabled}
              placeholder={placeholderText}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              currentValue={renderCurrentSelectedDate(rangeArray)}
              rightIconProps={{ Component: IconCalendarRight, onClick: openDatepicker }}
            />
          </div>
        }
      />
    </div>
  )
}
