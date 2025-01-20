import type { ReactNode } from 'react'
import type { ISVGIconProps } from '../SVGIcons/types'

export interface TSideNavigationPropTypes {
  className?: string
  actionElm?: JSX.Element
  showAction?: boolean
  children: ReactNode
  showToggleIcon?: boolean
  isOpen?: boolean
  setOpen?: (arg: boolean) => void
  sidebarOpenIconProps?: ISVGIconProps
  sidebarCloseIconProps?: ISVGIconProps
}

export interface TBlock {
  children: ReactNode
  label?: string
  isOpen?: boolean
}