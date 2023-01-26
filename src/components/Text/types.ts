import { TClickEventType } from '../../types/globals'

export interface TextPropTypes {
  children: string | JSX.Element
  type?: string
  size?: string
  weight?: string
  lineHeight?: string
  className?: string
  onClick?: (event: TClickEventType) => void
}
