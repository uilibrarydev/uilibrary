import { IFormCompProps } from '../../types/globals'

export interface TPopoverProps extends IFormCompProps {
  text?: string | JSX.Element
  children?: string | JSX.Element
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'middle-left'
    | 'middle-right'
  className?: string
}
