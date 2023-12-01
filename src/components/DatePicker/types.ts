import { ReactDatePickerProps } from 'react-datepicker'

type DatePickerDefaultProps = IFormCompProps & Omit<ReactDatePickerProps, 'onChange' | 'value'>

export interface ISimpleDatePickerProps extends DatePickerDefaultProps {
  label?: string | JSX.Element
  currentDate?: Date | undefined
  changeHandler?: (date: Date) => void
  excludeDates?: Date[]
  minDate?: Date | null
  maxDate?: Date | null
  format?: string
  required?: boolean
}
export interface ITimePickerProps extends DatePickerDefaultProps {
  label?: string | JSX.Element
  currentTime?: Date | undefined
  changeHandler?: (date: Date) => void
  required?: boolean
  format?: string
  filterTime?: (date: Date) => boolean
}

export interface IRangeDatePickerProps extends DatePickerDefaultProps {
  format?: string
  currentDates?: TRangePickerValues
  label?: string | JSX.Element
  changeHandler: (date: TRangePickerValues) => void
  maxDate?: Date | undefined
  // localizations: any
}

export enum DateFormat {
  LongDate = 'MMMM D, YYYY',
  ShortDate = 'MMM D, YYYY'
}
