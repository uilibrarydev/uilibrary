import { AnyObjectSchema } from 'yup'

export interface FormPropTypes {
  children: JSX.Element
  validationScheme: AnyObjectSchema
  initialValues: FormInitialValue
}
