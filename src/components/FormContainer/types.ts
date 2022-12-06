import { ReactElement } from 'react'
import { AnyObjectSchema } from 'yup'

export interface FormPropTypes {
  children: JSX.Element
  validationScheme: AnyObjectSchema
  initialValues: FormInitialValue
}

export type TFormFieldProps = {
  name: string
  placeholder: string
  component: (props: TComponentProps) => ReactElement<TComponentProps>
}
