import { ReactElement } from 'react'

export interface TTooltipProps extends IFormCompProps {
  text: string
  children?: ReactElement
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
  elemRef?: HTMLElement | null
  id?: string
}
