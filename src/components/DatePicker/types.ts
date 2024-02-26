import { ReactDatePickerProps } from 'react-datepicker'

type DatePickerDefaultProps = Omit<IFormCompProps, 'value'> &
  Omit<ReactDatePickerProps, 'onChange' | 'value'> & { value?: Date }

export enum Locales {
  HY = 'hy',
  EN = 'en',
  RU = 'ru'
}

export interface ISimpleDatePickerProps extends DatePickerDefaultProps {
  label?: string | JSX.Element
  currentDate?: Date | undefined
  changeHandler?: (date: Date) => void
  excludeDates?: Date[]
  minDate?: Date | null
  maxDate?: Date | null
  format?: string
  required?: boolean
  dayjsLocale?: string
}
export interface ITimePickerProps extends DatePickerDefaultProps {
  label?: string | JSX.Element
  currentTime?: Date | undefined
  changeHandler?: (date: Date) => void
  required?: boolean
  format?: string
  filterTime?: (date: Date) => boolean
  dayjsLocale?: string
}

export interface IRangeDatePickerProps extends DatePickerDefaultProps {
  format?: string
  currentDates?: TRangePickerValues
  label?: string | JSX.Element
  changeHandler: (date: TRangePickerValues) => void
  maxDate?: Date | undefined
  dayjsLocale?: string
}

export type TRangePickerValues = [Date | null, Date | null]

export enum DateFormat {
  LongDate = 'MMMM D, YYYY',
  ShortDate = 'MMM D, YYYY'
}
