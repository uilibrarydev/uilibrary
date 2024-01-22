import { IconPropTypes } from '../Icon/types'
import { ReactNode } from 'react'

export type TChipsColors =
  | 'primary'
  | 'disabled'
  | 'brand'
  | 'danger'
  | 'warning'
  | 'success'
  | 'information'
  | 'discovery'
export interface TChipsProps extends IFormCompProps {
  text: string | ReactNode
  leftIconProps?: IconPropTypes
  color?: TChipsColors
  type?: 'filled' | 'accent' | 'outlined'
  size?: 'large' | 'medium' | 'small'
  className?: string
  disabled?: boolean
  withAction?: boolean
  onClick?: (e: TClickEventType) => void
}
