export type TMenuItem = {
  label: TItemLabel
  value: TItemValue
  iconProps?: TSelectIconProps
  handler: TCallBackFn
}

export type TMenuProps = {
  menuItems: TMenuItem[]
  parentRef: HTMLElement
  onClose: TCallBackFn
  position?: 'right' | 'left' | 'top' | 'bottom'
}
