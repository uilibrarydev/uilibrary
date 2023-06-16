export type TMenuPropTypes = {
  menuItems: Array<{
    label: string
    value: number | string
    iconProps?: {
      name: string
      alignment?: string
    }
    handler: () => void
  }>
  parentRef: HTMLElement
}
