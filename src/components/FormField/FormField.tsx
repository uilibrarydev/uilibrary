import React, { ReactElement, useContext } from 'react'
import { ErrorMessage as ReactHookFormErrorMessage } from '@hookform/error-message'
import { ErrorMessage } from '../../helperComponents'
import { FormContext } from '../../context'
import { Controller } from 'react-hook-form'
import { TFormFieldPropTypes } from './types'
import classnames from 'classnames'

export const FormField = (props: TFormFieldPropTypes): ReactElement | null => {
  const { As, name, className = '', dataId = '', hideErrorMessage = false, errorMessageIcon } = props
  const { register, errors, setValue, control } = useContext(FormContext)

  if (!register) {
    return null
  }

  const registerOptions = register(name)

  return (
    <div className={classnames('form-container__field', className, name)}>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => {
          return (
            <>
              {As({
                hasError: !!fieldState.error,
                isValid: fieldState.isTouched && fieldState.isDirty && !fieldState.invalid,
                dataId,
                ...registerOptions,
                setFieldValue: (data, name, options) =>
                  setValue(data, name, {
                    shouldValidate: true,
                    shouldDirty: true,
                    shouldTouch: true,
                    ...options
                  }),
                ...field
              })}
              {!hideErrorMessage ? (
                <ReactHookFormErrorMessage
                  name={name}
                  errors={errors}
                  render={({ message }: { message: string }) => {
                    return <ErrorMessage dataId={dataId} message={message || ''} icon={errorMessageIcon}/>
                  }}
                />
              ) : null}
            </>
          )
        }}
      />
    </div>
  )
}
