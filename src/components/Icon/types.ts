import { LegacyRef } from 'react'

export interface IconPropTypes {
  name?: string
  type?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'disabled'
    | 'inverse'
    | 'selected'
    | 'brand'
    | 'danger'
    | 'warning'
    | 'success'
    | 'information'
    | 'discovery'
  size?: TIconSize
  onClick?: TClickHandler
  className?: string
  refHandler?: LegacyRef<HTMLElement> | undefined
}
