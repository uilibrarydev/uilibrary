export type TButtonPropTypes = {
  buttonText: string
  type: 'Primary' | 'Warning'
  onClick: (event: TClickMouseEvent) => void
}
