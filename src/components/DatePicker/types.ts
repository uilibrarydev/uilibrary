import { ReactDatePickerProps } from 'react-datepicker'

type DatePickerDefaultProps = Omit<IFormCompProps, 'value'> &
  Omit<ReactDatePickerProps, 'onChange' | 'value'>

export interface ISimpleDatePickerProps extends DatePickerDefaultProps {
  dataIdPrefix?: string
  label?: string | JSX.Element
  currentDate?: Date | undefined
  changeHandler?: (date: Date) => void
  excludeDates?: Date[]
  minDate?: Date | null
  maxDate?: Date | null
  format?: string
  required?: boolean
  dayjsLocale?: string
  value?: Date
  size?: 'large' | 'small'
  months?: TSelectOptions
}
export interface ITimePickerProps extends DatePickerDefaultProps {
  label?: string | JSX.Element
  currentTime?: Date | undefined
  changeHandler?: (date: Date) => void
  required?: boolean
  format?: string
  filterTime?: (date: Date) => boolean
  dayjsLocale?: string
  value?: Date
  size?: 'large' | 'small'
}

export interface IRangeDatePickerProps extends DatePickerDefaultProps {
  format?: string
  currentDates?: TRangePickerValues
  label?: string | JSX.Element
  changeHandler: (date: TRangePickerValues) => void
  maxDate?: Date | undefined
  dayjsLocale?: string
  value?: [Date, Date]
}

export type TRangePickerValues = [Date | null, Date | null]

export enum DateFormat {
  LongDate = 'MMMM D, YYYY',
  ShortDate = 'MMM D, YYYY'
}
