import { TIconTypes } from '../Icon/types'

export const TYPE_MAPPING: { [key: string]: TIconTypes } = {
  warning: 'warning',
  success: 'success',
  error: 'danger',
  information: 'information'
}

export const ICONS_MAPPING: { [key: string]: string } = {
  warning: 'warning-hover',
  success: 'checkmark-hover',
  error: 'error',
  information: 'info-hover'
}

export const DEFAULT_DURATION = 6000
