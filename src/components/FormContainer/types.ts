import { AnyObjectSchema } from 'yup'
import { TButtonPropTypes } from '../Button/types'

export interface FormPropTypes {
  onSubmit?: (data: TFormData) => void
  children: JSX.Element
  validationScheme: AnyObjectSchema
  initialValues: TFormData
  buttonConfigs?: TButtonPropTypes[]
}
