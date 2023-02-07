import { LegacyRef } from 'react'

export interface IconPropTypes {
  name?: string
  type?: string
  size?: string
  onClick?: () => void
  className?: string
  refHandler?: LegacyRef<HTMLElement> | undefined
  withWrapper?: boolean
}
