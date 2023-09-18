export type TCollapseTitleColor = 'selected' | 'primary'
export interface ICollapseTitleProps {
  size?: 'small' | 'medium'
  color?: TCollapseTitleColor
}

interface TCollapseItemTitle extends ICollapseTitleProps {
  text: string
}
export type TCollapseProps = {
  isOpen: boolean
  toggle: () => void
  children: JSX.Element
  title: TCollapseItemTitle
}

export type TCollapseValue = string | number

export type TColapseItem = {
  title: string
  value: TCollapseValue
  content: JSX.Element
  isOpen: boolean
}

export type TCollapseGroupProps = {
  items: TColapseItem[]
  singleSelection?: boolean
  titleProps?: ICollapseTitleProps
}
