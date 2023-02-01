import { IFormCompProps, TRangePickerValues } from '../../types/globals'

export interface ISimpleDatePickerProps extends IFormCompProps {
  label?: string | JSX.Element
  currentDate?: Date | undefined
  changeHandler?: (date: Date) => void
  excludeDates?: Date[]
  minDate?: Date | null
  maxDate?: Date | null
  format?: string
}
export interface ITimePickerProps extends IFormCompProps {
  label?: string | JSX.Element
  currentTime?: Date | undefined
  changeHandler?: (date: Date) => void
}

export interface IRangeDatePickerProps extends IFormCompProps {
  currentDates?: TRangePickerValues
  label?: string | JSX.Element
  changeHandler: (date: TRangePickerValues) => void
}
