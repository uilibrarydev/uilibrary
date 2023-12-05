export interface TNavigationLinkPropTypes {
  As: () => JSX.Element
  type: 'main' | 'sub' | 'block-header' | 'user' | 'product' | 'action'
  open: boolean
  iconName?: string
  showBadge?: boolean
  expandable?: boolean
  showAction?: boolean
  actionElm?: JSX.Element
  userImage?: JSX.Element
  active?: boolean
  badgeContent?: string
  Child?: () => JSX.Element
}
