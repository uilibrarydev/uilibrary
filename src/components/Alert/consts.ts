import type { TSVGIconType } from '../SVGIcons/types'

export const TYPE_MAPPING: { [key: string]: TSVGIconType } = {
  warning: 'warning',
  success: 'success',
  error: 'danger',
  information: 'information',
  discovery: 'discovery',
  grey: 'disabled'
}

export const ICONS_MAPPING: { [key: string]: string } = {
  grey: 'infoFilled',
  warning: 'warningFilled',
  success: 'checkmarkCircleFilled',
  error: 'errorCircleFilled',
  information: 'infoFilled',
  discovery: 'infoFilled'
}
