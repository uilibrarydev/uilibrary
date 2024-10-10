import { ReactNode } from 'react'
import { ISVGIconProps } from '../SVGIcons/types'

export interface TSideNavigationPropTypes {
  actionElm: JSX.Element
  showAction: boolean
  children: ReactNode
  showToggleIcon?: boolean
  open: boolean
  setOpen: (arg: boolean) => void
  sidebarOpenIconProps?: ISVGIconProps
  sidebarCloseIconProps?: ISVGIconProps
}

export interface TBlock {
  children: ReactNode
  label?: string
  open?: boolean
}
