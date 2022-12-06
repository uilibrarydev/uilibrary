export type TButtonPropTypes = {
  buttonText: string
  className?: string
  type: 'primary' | 'Warning'
  onClick: (event: TEventType) => void
}
