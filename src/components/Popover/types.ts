import { ReactElement } from 'react'
import { LinkPropTypes } from '../Link/types'
import {IFormCompProps} from '../../types/types';

export interface TPopoverProps extends IFormCompProps {
  clicked?: boolean
  text?: string | ReactElement
  linkAddons?: LinkPropTypes
  linkText?: string
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
