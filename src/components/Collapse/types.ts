export type TCollapseTitleColor = 'selected' | 'primary'

export type TCollapseProps = {
  title: string
  isOpen: boolean
  toggle: () => void
  children: JSX.Element
  titleSize?: 'small' | 'medium'
  titleColor?: TCollapseTitleColor
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
  titleSize?: 'small' | 'medium'
  titleColor?: TCollapseTitleColor
}
