import React, { useEffect, useRef, useState } from 'react'
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'
import { Input } from '../Input'
import { ISimpleDatePickerProps } from './types'
import { Label } from '../../helperComponents'
import { useImportFilesDynamically } from './hooks'

export const SimpleDatePicker = (props: ISimpleDatePickerProps): JSX.Element => {
  const {
    value,
    currentDate,
    setFieldValue,
    name,
    label,
    locale = 'hy',
    changeHandler,
    format = 'M/D/YYYY',
    dayjsLocale = 'hy-am',
    required = false,
    hasError,
    placeholderText,
    ...rest
  } = props
  const calendarRef = useRef<{ setOpen: (isOpen: boolean) => void | null }>(null)

  useImportFilesDynamically(dayjsLocale)

  const dateInitialValue =
    value !== undefined && Object.prototype.toString.call(value) === '[object Date]'
      ? value
      : currentDate

  const [selectedDate, setSelectedDate] = useState(dateInitialValue)

  const openDatepicker = () => {
    if (calendarRef.current) {
      calendarRef.current?.setOpen(true)
    }
  }

  const onChange = (date: Date) => {
    setSelectedDate(date)

    if (setFieldValue && name) {
      setFieldValue(name, date)
    }
    if (changeHandler) {
      changeHandler(date)
    }
  }

  return (
    <div className="picker-container">
      <Label text={label} required={required} invalid={hasError} />

      <DatePicker
        selected={dayjs(selectedDate).isValid() ? selectedDate : null}
        locale={locale}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={calendarRef}
        customInput={
          <Input
            placeholder={placeholderText}
            rightIconProps={{ name: 'calendar', onClick: openDatepicker }}
            currentValue={selectedDate ? dayjs(selectedDate.toString()).format(format) : ''}
          />
        }
        {...rest}
        onChange={onChange}
      />
    </div>
  )
}
