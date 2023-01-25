import {ElementType} from 'react'

export interface HeadingPropTypes {
  text: string | JSX.Element
  type?: ElementType
  size?: string
  weight?: string
  className?: string
  onClick?: (event: TEventType) => void
}