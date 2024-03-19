import { ReactNode } from 'react'
import {InputCustomProps} from '../Input/types';

export interface TCardSelectProps {
  title: string | ReactNode
  badgeText: string | ReactNode
  inputProps: InputCustomProps
  className?: string
  disabled?: boolean
  withAction?: boolean
  onClick?: (e: TClickEventType) => void
  dataId?: string
}