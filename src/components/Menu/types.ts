export type TMenuPropTypes = {
  menuItems: Array<{
    label: string
    iconProps?: {
      name: string
      alignment?: string
    }
    handler: () => void
  }>
  parentRef: HTMLElement
}
