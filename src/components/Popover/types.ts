import {ReactElement} from 'react';

export interface TPopoverProps extends IFormCompProps {
  text?: string | ReactElement
  children?: string | ReactElement
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
  elemRef?: HTMLElement
  id?: string | number
}
