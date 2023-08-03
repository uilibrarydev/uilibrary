import { FormState } from 'react-hook-form'
import { AnyObjectSchema } from 'yup'
import { TButtonPropTypes } from '../Button/types'

export interface FormPropTypes {
  className?: string
  onSubmit?: (data: TFormData, formState: FormState<TFormData>) => void
  children?: JSX.Element
  validationScheme: AnyObjectSchema
  initialValues: TFormData
  buttonConfigs?: TButtonPropTypes[]
  shouldUnregister?: boolean
  shouldFocusError?: boolean
}
