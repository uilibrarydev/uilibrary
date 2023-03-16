import { ElementType } from 'react'
import { TClickEventType } from '../../types/globals'

export interface HeadingPropTypes {
  children: string | JSX.Element
  type?: ElementType
  size?: 'xsmall' | 'small' | 'standard' | 'medium' | 'large' | 'xlarge'
  weight?: 'regular' | 'semibold' | 'bold'
  className?: string
  onClick?: (event: TClickEventType) => void
}
