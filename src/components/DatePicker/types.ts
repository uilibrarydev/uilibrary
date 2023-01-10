import { IFormCompProps } from '../../types/globals'

export interface ISimpleDatePickerProps extends IFormCompProps {
  label?: string | JSX.Element
  currentDate?: Date | undefined
}
export interface ITimePickerProps extends IFormCompProps {
  label?: string | JSX.Element
  currentTime?: Date | undefined
}

export interface TRangeDatePickerProps extends IFormCompProps {
  currentDates: [Date | null, Date | null] | undefined
  label?: string | JSX.Element
  // onChange: (date: [Date | null, Date | null]) => void
}
