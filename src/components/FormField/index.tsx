import React, { useContext } from 'react'
import { FormContext } from '../../context'
import { Controller } from 'react-hook-form'
import { ErrorMessage as ReactHookFormErrorMessage } from '@hookform/error-message'
import ErrorMessage from '../../helperComponents/ErrorMessage'
import { TFormFieldPropTypes } from './types'
import '../../assets/styles/components/_form.scss'

const FormField = (props: TFormFieldPropTypes): JSX.Element | null => {
  const { As, name, isNeedChangeHandler = false, isControlled = false, className = '' } = props
  const { register, errors, setValue, control } = useContext(FormContext)

  const errorMessage = errors && errors[name] ? errors[name].message : null

  if (!register) {
    return null
  }

  const registerOptions = register(name)

  return (
    <div className={`form-container__field ${className}`}>
      {isControlled ? (
        <Controller
          control={control}
          name={name}
          render={({ field }) =>
            As({
              error: errorMessage,
              ...field,
              ...registerOptions,
              ...(isNeedChangeHandler
                ? {
                    setFieldValue: (data, name, setterOptions) =>
                      setValue(data, name, {
                        shouldValidate: true,
                        shouldDirty: true,
                        shouldTouch: true,
                        ...setterOptions
                      })
                  }
                : {})
            })
          }
        />
      ) : (
        As({
          error: errorMessage,
          ...registerOptions,
          ...(isNeedChangeHandler ? { setFieldValue: setValue } : {})
        })
      )}
      {errorMessage ? (
        <ErrorMessage message={errorMessage || ''} />
      ) : (
        <ReactHookFormErrorMessage
          name={name}
          errors={errors}
          render={({ message }) => <p className="error-message">{message}</p>}
        />
      )}
    </div>
  )
}

export default FormField
