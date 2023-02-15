import { ElementType } from 'react'

export interface HeadingPropTypes {
  children: string | JSX.Element
  type?: ElementType
  size?: 'xsmall' | 'small' | 'standard' | 'medium' | 'large' | 'xlarge'
  weight?: 'regular' | 'semibold' | 'bold'
  className?: string
  onClick?: (event: TEventType) => void
}
