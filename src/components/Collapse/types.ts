import type { ReactElement, ReactNode } from 'react'

export type TCollapseTitleColor = 'selected' | 'primary'

export interface ICollapseTitleProps {
  size?: 'small' | 'medium'
  color?: TCollapseTitleColor
}

interface TCollapseItemTitle extends ICollapseTitleProps {
  text: string | ReactNode
}
export type TCollapseProps = {
  isOpen: boolean
  toggle: () => void
  children: any
  title: TCollapseItemTitle
  reverse?: boolean
  additionalInfo?: ReactNode
  dataId?: string | undefined
  labelLeftIconProps?: TSelectIconProps
  id?: string | number
  className?: string
}

export type TCollapseValue = string | number

export type TCollapseItem = {
  title: string
  value: TCollapseValue
  content?: ReactElement | null
  iconProps?: TSelectIconProps
  isOpen?: boolean
  dataId?: string
  id?: string | number
}

export type TCollapseGroupProps = {
  items: TCollapseItem[]
  singleSelection?: boolean
  titleProps?: ICollapseTitleProps
  className?: string
}
