export interface TButtonPropTypes {
  id?: string
  disabled?: boolean
  buttonActionType?: 'submit' | 'button' | 'reset'
  buttonText?: string | JSX.Element
  className?: string
  type?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'text'
  size?: 'small' | 'medium' | 'large'
  isLoading?: boolean
  iconProps?: {
    name: string
    alignment?: string
  }
  onClick?: (event: TClickEventType) => void
  formId?: string
  dataId?: string
  refHandler?: (ref: HTMLButtonElement | null) => void
}
