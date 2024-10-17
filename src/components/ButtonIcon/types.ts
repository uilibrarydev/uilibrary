import { ButtonHTMLAttributes, LegacyRef, PropsWithChildren, ReactElement } from 'react'

export interface TButtonIconPropTypes
  extends PropsWithChildren<Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'children'>> {
  id?: string
  disabled?: boolean
  buttonActionType?: 'submit' | 'button' | 'reset'
  className?: string
  size?: 'small' | 'medium' | 'large'
  isLoading?: boolean
  iconProps: {
    Component: TSVGIconComponent
  }
  onClick?: (event: TClickEventType) => void
  formId?: string
  dataId?: string
  refHandler?: LegacyRef<HTMLButtonElement> | undefined
}
