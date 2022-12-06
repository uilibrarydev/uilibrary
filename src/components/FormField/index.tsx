import React, { useContext, useMemo } from 'react'
import { FormContext } from '../../context'
import { customColors } from '../../consts'
import ErrorMessage from '../../helperComponents/ErrorMessage'
import { TFormFeildPropTypes } from './types'
import './index.scss'

const FormField = (props: TFormFeildPropTypes): JSX.Element | null => {
  const { component: FormItemComp, name, ...rest } = props
  const { register, errors } = useContext(FormContext)

  const errorMessage = useMemo(() => {
    if (errors && errors[name]) {
      return errors[name].message
    }
    return null
  }, [errors, name])

  if (!register) {
    return null
  }
  return (
    <div className="form-field-container">
      <FormItemComp
        style={{
          border: `1px solid ${
            errorMessage ? customColors.inputBorderError : customColors.inputBorderGray
          }`
        }}
        {...rest}
        {...register(name)}
      />
      <ErrorMessage message={errorMessage || ''} />
    </div>
  )
}

export default FormField
