
export type TTabItem = {
  value: number | string
  label: string | JSX.Element
}
export interface TTabProps extends IFormCompProps {
  tabItems: TTabItem[]
  size?: 'large' | 'medium' | 'small'
  className?: string
  iconProps?: {
    name: string
    alignment?: string
  }
  badgeProps?: {
    text: string
  }
  disabled?: boolean
  selectedValue: number | string
  onSelect: (value: string | number) => void
}

export type TTabItemProps = {
  label?: string | JSX.Element
  size?: 'large' | 'medium' | 'small'
  className?: string
  iconProps?: {
    name: string
    alignment?: string
  }
  badgeProps?: {
    text: string
  }
  disabled?: boolean
  isSelected: boolean
  onClick: () => void
}
