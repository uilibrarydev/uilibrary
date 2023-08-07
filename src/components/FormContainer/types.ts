import { FormState } from 'react-hook-form'
import { AnyObjectSchema } from 'yup'
import { TButtonPropTypes } from '../Button/types'
import {ValidationMode} from 'react-hook-form/dist/types/form';

export interface FormPropTypes {
  className?: string
  onSubmit?: (data: TFormData, formState: FormState<TFormData>) => void
  children?: JSX.Element
  validationScheme: AnyObjectSchema
  initialValues: TFormData
  buttonConfigs?: TButtonPropTypes[]
  shouldUnregister?: boolean
  shouldFocusError?: boolean
  mode?:   keyof ValidationMode
  reValidateMode?: 'onChange' | 'onSubmit' | 'onBlur' | undefined
  formId?: string
}
