import { ReactNode } from 'react'
import { FormState } from 'react-hook-form'
import { AnyObjectSchema } from 'yup'
import { ValidationMode } from 'react-hook-form/dist/types/form'
import { TButtonPropTypes } from '../Button/types'

export type TDirtyFields = Partial<Readonly<{ [x: string]: unknown }>>

export interface FormPropTypes {
  className?: string
  onSubmit?: (data: TFormData, formState: FormState<TFormData>, dirtyFields?: TDirtyFields) => void
  children?: ReactNode
  validationScheme: AnyObjectSchema
  initialValues: TFormData
  buttonConfigs?: TButtonPropTypes[]
  shouldUnregister?: boolean
  shouldFocusError?: boolean
  mode?: keyof ValidationMode
  reValidateMode?: 'onChange' | 'onSubmit' | 'onBlur' | undefined
  formId?: string
}
