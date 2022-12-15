export type IconPropTypes = {
  name: string
  size?: TIconSize
  color?: TColor
  onClick?: () => void
  className?: string
  refHandler?: CallbackFnType
  withWrapper?: boolean
  wrapperColor?: TColor
}
