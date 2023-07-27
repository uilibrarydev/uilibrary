export type TMenuItem = {
  label: TItemLabel
  value: TItemValue
  iconProps?: TSelectIconProps
  handler: TCallBackFn
}

export enum PositionTypes {
  bottom = 'bottom',
  right = 'right',
  left = 'left',
  top = 'top'
}

export type TMenuProps = {
  menuItems: TMenuItem[]
  parentRef: HTMLElement
  onClose: TCallBackFn
  position: PositionTypes
}
