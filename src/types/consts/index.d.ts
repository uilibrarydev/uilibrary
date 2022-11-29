declare type TIconSize = 'small' | 'medium' | 'large'

declare type TIconSizes = {
  [size: TIconSize]: string
}

declare type TCustomColors = {
  red: string
  [color: string]: string
}
