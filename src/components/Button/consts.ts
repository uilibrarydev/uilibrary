import { TSVGIconSize, TSVGIconType } from '../SVGIcons/types'

export const LITE_LOADER_TYPES = ['primary', 'danger']

export const ICON_SIZE_MAPPING: { [key: string]: TSVGIconSize } = {
  large: 'small',
  medium: 'small',
  small: 'xsmall'
}

export const ICON_TYPE_MAPPING: { [key: string]: TSVGIconType } = {
  primary: 'inverse',
  secondary: 'secondary',
  tertiary: 'tertiary',
  danger: 'inverse',
  text: 'selected',
  link: 'selected'
}
