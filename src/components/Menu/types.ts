export type TMenuPropTypes = {
  menuItems: Array<{
    label: string
    icon: any
    handler: () => void
  }>
  parentRef: HTMLElement
}
