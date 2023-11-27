import { ButtonHTMLAttributes, LegacyRef } from 'react'

export interface TButtonPropTypes extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  id?: string
  disabled?: boolean
  buttonActionType?: 'submit' | 'button' | 'reset'
  buttonText?: string | JSX.Element
  className?: string
  type?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'text' | 'link'
  size?: 'small' | 'medium' | 'large'
  isLoading?: boolean
  iconProps?: {
    name: string
    alignment?: string
  }
  onClick?: (event: TClickEventType) => void
  formId?: string
  dataId?: string
  refHandler?: LegacyRef<HTMLButtonElement> | undefined
}
