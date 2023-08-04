import { LegacyRef } from 'react'

export type TIconTypes =
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
export interface IconPropTypes {
  name?: string
  type?: TIconTypes

  size?: TIconSize
  onClick?: TClickHandler
  className?: string
  refHandler?: LegacyRef<HTMLElement> | undefined
}
