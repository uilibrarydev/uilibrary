import React, { useRef, useState } from 'react'
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'
import { Input } from '../Input'
import { ITimePickerProps } from './types'
import { Label } from '../../helperComponents'
import { useImportFilesDynamically } from './hooks'

export const TimePicker = (props: ITimePickerProps): JSX.Element => {
  const {
    value,
    currentTime,
    name,
    setFieldValue,
    label,
    size,
    dataId,
    changeHandler,
    required,
    format = 'HH:mm',
    locale = 'hy',
    dayjsLocale = 'hy-am',
    placeholderText,
    hasError,
    ...rest
  } = props
  const dateInitialValue =
    value !== undefined && Object.prototype.toString.call(value) === '[object Date]'
      ? value
      : currentTime
  const [selectedTime, setCurrentTime] = useState(dateInitialValue)
  const calendarRef = useRef<{
    isCalendarOpen: () => boolean
    setOpen: (isOpen: boolean) => void | null
  }>(null)

  useImportFilesDynamically(dayjsLocale)

  const onChange = (date: Date) => {
    setCurrentTime(date)

    if (changeHandler) {
      changeHandler(date)
    }
    if (setFieldValue && name) {
      setFieldValue(name, date)
    }
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
        selected={dayjs(selectedTime).isValid() ? selectedTime : new Date()}
        locale={locale}
        showTimeSelect
        showTimeSelectOnly
        dateFormat={format}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={calendarRef}
        {...rest}
        onChange={onChange}
        customInput={
          <Input
            disabled={rest.disabled}
            dataId={dataId}
            size={size}
            placeholder={placeholderText}
            rightIconProps={{ name: 'clock', onClick: openDatepicker }}
          />
        }
      />
    </div>
  )
}
