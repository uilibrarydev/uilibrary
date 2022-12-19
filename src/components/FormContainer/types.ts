import { AnyObjectSchema } from 'yup'

export interface FormPropTypes {
  onSubmit?: (data: TFormData) => void
  children: JSX.Element
  validationScheme: AnyObjectSchema
  initialValues: TFormData
  buttonConfigs?: TButtonPropTypes[]
}
