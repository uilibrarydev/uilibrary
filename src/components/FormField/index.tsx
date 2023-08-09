import React, { useContext } from 'react'
import { ErrorMessage as ReactHookFormErrorMessage } from '@hookform/error-message'
import { ErrorMessage } from '../../helperComponents/index'
import { FormContext } from '../../context'
import { Controller } from 'react-hook-form'
import { TFormFieldPropTypes } from './types'

import '../../assets/styles/components/_form.scss'

const FormField = (props: TFormFieldPropTypes): JSX.Element | null => {
  const { As, name, isNeedChangeHandler = false, className = '' } = props
  const { register, errors, setValue, control } = useContext(FormContext)

  if (!register) {
    return null
  }

  const registerOptions = register(name)

  return (
    <div className={`form-container__field ${className}`}>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => {
          return (
            <>
              {As({
                hasError: !!fieldState.error,

                ...registerOptions,
                ...(isNeedChangeHandler
                  ? {
                      setFieldValue: (data, name) =>
                        setValue(data, name, {
                          shouldValidate: true,
                          shouldDirty: true,
                          shouldTouch: true
                        })
                    }
                  : {}),
                ...field
              })}
              <ReactHookFormErrorMessage
                name={name}
                errors={errors}
                render={({ message }: { message: string }) => (
                  <ErrorMessage message={message || ''} />
                )}
              />
            </>
          )
        }}
      />
    </div>
  )
}

export default FormField
