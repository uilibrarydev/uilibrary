export interface TSwitcherProps {
  onChanage: (isChecked: boolean) => void
  isChecked: boolean
  id?: string
  backgroundColor?: TColor
}
