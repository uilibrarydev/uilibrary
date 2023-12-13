export enum NavigationItemTypes {
  MAIN = 'main',
  SUB = 'sub',
  BLOCK_HEADER = 'block-header',
  USER = 'user',
  PRODUCT = 'product',
  ACTION = 'action'
}

export interface TNavigationLinkPropTypes {
  As: () => JSX.Element
  type:
    | NavigationItemTypes.MAIN
    | NavigationItemTypes.SUB
    | NavigationItemTypes.BLOCK_HEADER
    | NavigationItemTypes.USER
    | NavigationItemTypes.PRODUCT
    | NavigationItemTypes.ACTION
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
