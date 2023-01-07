export interface TextPropTypes {
  children: string | JSX.Element
  size?: TTextSize
  color?: TColor
  className?: string
  onClick?: (event: TEventType) => void
}
