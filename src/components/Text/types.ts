export interface TextPropTypes {
  children: string
  size?: TTextSize
  color?: TColor
  className?: string
  onClick?: (event: TEventType) => void
}
