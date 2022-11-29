import React from 'react'
import { ReactElement } from 'react'
import { AnyObjectSchema } from 'yup'
// import { TValidationsScheme } from '../../validations/types'

export interface FormPropTypes {
  formItems?: TFormItem[]
  validationScheme: AnyObjectSchema
}

export type TFormFieldProps = {
  name: string
  placeholder: string
  component: (props: TComponentProps) => ReactElement<TComponentProps>
}

export type TControledCompField = {
  name: string
  onBlur: () => void
  onChange?: (event: TInputChangeEventType) => void
  ref: React.Ref<HTMLInputElement>
  value: string
}
