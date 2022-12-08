export type TButtonPropTypes = {
  buttonText: string
  className?: string
  type: 'primary' | 'secondary' | 'disabled' | 'passiveTextButton' | 'activeTextButton'
  iconProps?: { name: string; size: TIconSize; color: TColor }
  onClick: (event: TEventType) => void
}
