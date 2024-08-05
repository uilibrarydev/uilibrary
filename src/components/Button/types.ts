import { ButtonHTMLAttributes, LegacyRef, ReactElement } from 'react'

export interface TButtonPropTypes extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  id?: string
  disabled?: boolean
  buttonActionType?: 'submit' | 'button' | 'reset'
  buttonText?: string | ReactElement
  className?: string
  type?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'text' | 'link'
  size?: 'small' | 'medium' | 'large'
  isLoading?: boolean
  iconProps?: {
    size?: TIconSize
    alignment?: string
    Component?: TSVGIconComponent
  }
  onClick?: (event: TClickEventType) => void
  formId?: string
  dataId?: string
  refHandler?: LegacyRef<HTMLButtonElement> | undefined
}
