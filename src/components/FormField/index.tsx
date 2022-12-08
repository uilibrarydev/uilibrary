import React, { useContext, useMemo } from 'react'
import { FormContext } from '../../context'
import ErrorMessage from '../../helperComponents/ErrorMessage'
import { TFormFieldPropTypes } from './types'
import './index.scss'

const FormField = (props: TFormFieldPropTypes): JSX.Element | null => {
  const { component: FormItemComp, name, ...rest } = props
  const { register, errors, setValue } = useContext(FormContext)

  const errorMessage = useMemo(() => {
    if (errors && errors[name]) {
      return errors[name].message
    }
    return null
  }, [errors, name])

  if (!register) {
    return null
  }
  // TODO use classname for set error state with-error-styles

  return (
    <div className="form-field-container">
      <FormItemComp {...rest} {...register(name)} setFieldValue={setValue} />
      <ErrorMessage message={errorMessage || ''} />
    </div>
  )
}

export default FormField
