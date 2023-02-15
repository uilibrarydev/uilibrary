import { IFormCompProps } from '../../types/globals'

export interface TTooltipProps extends IFormCompProps {
  text: string
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
  size?: 'large' | 'small'
  className?: string
}
