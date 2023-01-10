import { IFormCompProps } from '../../types/globals'

export interface ISimpleDatePickerProps extends IFormCompProps {
  label?: string | JSX.Element
  currentTime?: Date | undefined
}
