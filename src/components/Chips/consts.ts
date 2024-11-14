import type { TSVGIconSize, TTextSize } from '../SVGIcons/types'

export const ICON_SIZE_MAPPING: { [key: string]: TSVGIconSize } = {
  large: 'medium',
  medium: 'small',
  small: 'xsmall',
  xsmall: 'xxsmall'
}

export const TEXT_SIZE_MAPPING: { [key: string]: TTextSize } = {
  large: 'standard',
  medium: 'standard',
  small: 'small',
  xsmall: 'xsmall'
}
