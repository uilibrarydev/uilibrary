import { IFormCompProps } from '../../types/globals'

export type TBreadCrumbItem = {
  value: number | string
  label: string | JSX.Element
  onClick: () => void
}
export interface TBreadCrumbProps extends IFormCompProps {
  breadrumbItem: TBreadCrumbItem[]
  className?: string

  selectedValue: number | string
  onSelect: (value: string | number) => void
}
