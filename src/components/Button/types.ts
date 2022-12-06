export type TButtonPropTypes = {
  buttonText: string
  className?: string
  type: 'primary' | 'Warning'
  iconProps?: { name: string; size: TIconSize; color: string }
  onClick: (event: TEventType) => void
}
