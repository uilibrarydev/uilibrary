import { ReactElement } from 'react'
import { AnyObjectSchema } from 'yup'
// import { TValidationsScheme } from '../../validations/types'

export interface FormPropTypes {
  children: JSX.Element
  validationScheme: AnyObjectSchema
  initialValues: FieldValues
}

export type TFormFieldProps = {
  name: string
  placeholder: string
  component: (props: TComponentProps) => ReactElement<TComponentProps>
}
