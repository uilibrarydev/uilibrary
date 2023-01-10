import React, { useContext } from 'react'
import { FormContext } from '../../context'
import { Controller } from 'react-hook-form'
import ErrorMessage from '../../helperComponents/ErrorMessage'
import { TFormFieldPropTypes } from './types'
import './index.scss'

const FormField = (props: TFormFieldPropTypes): JSX.Element | null => {
  const { As, name, isNeedChangeHandler = false, isControlled = false } = props
  const { register, errors, setValue, control } = useContext(FormContext)

  const errorMessage = errors && errors[name] ? errors[name].message : null

  if (!register) {
    return null
  }

  const registerOptions = register(name)

  return (
    <div className="form_field_container">
      {isControlled ? (
        <Controller
          control={control}
          name={name}
          render={({ field }) =>
            As({
              ...field,
              ...(isNeedChangeHandler ? { setFieldValue: setValue } : {})
            })
          }
        />
      ) : (
        As({
          ...registerOptions,
          ...(isNeedChangeHandler ? { setFieldValue: setValue } : {})
        })
      )}

      {errorMessage && <ErrorMessage message={errorMessage || ''} />}
    </div>
  )
}

export default FormField
