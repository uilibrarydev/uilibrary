import { IFormCompProps, TRangePickerValues } from '../../types/globals'

export interface ISimpleDatePickerProps extends IFormCompProps {
  label?: string | JSX.Element
  currentDate?: Date | undefined
  changeHandler?: (date: Date) => void
  excludeDates?: Date[]
  minDate?: Date | null
  maxDate?: Date | null
  format?: string
  required?: boolean
}
export interface ITimePickerProps extends IFormCompProps {
  label?: string | JSX.Element
  currentTime?: Date | undefined
  changeHandler?: (date: Date) => void
  required?: boolean
  format?: string
  filterTime?: (date: Date) => boolean
}

export interface IRangeDatePickerProps extends IFormCompProps {
  format?: string
  currentDates?: TRangePickerValues
  label?: string | JSX.Element
  changeHandler: (date: TRangePickerValues) => void
}
