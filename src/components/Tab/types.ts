export type TTabItem = {
  value: number | string
  label: string | JSX.Element
  dataId?: string
  disabled?: boolean
  badgeProps?: {
    text: string
  }
}
export interface TTabProps extends IFormCompProps {
  tabItems: TTabItem[]
  size?: 'large' | 'medium' | 'small'
  className?: string
  iconProps?: {
    name: string
    alignment?: string
  }
  rightIconProps?: {
    name: string
    alignment?: string
    action?: (value: string | number) => void
  }
  badgeProps?: {
    text: string
  }
  disabled?: boolean
  selectedValue: number | string
  onSelect: (value: string | number) => void
}

export type TTabItemProps = {
  dataId?: string
  label?: string | JSX.Element
  size?: 'large' | 'medium' | 'small'
  className?: string
  iconProps?: {
    name: string
    alignment?: string
  }
  rightIconProps?: {
    name: string
    alignment?: string
    action?: (value: string | number) => void
  }
  badgeProps?: {
    text: string
  }
  val: string | number
  disabled?: boolean
  isSelected: boolean
  onClick: () => void
}
