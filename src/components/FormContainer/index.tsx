import React from 'react'
import { useForm } from 'react-hook-form'
import { FormContext } from '../../context'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormPropTypes } from './types'
import Button from '../Button'
import '../../assets/styles/components/_form.scss'
import classnames from 'classnames'

const FormContainer = (props: FormPropTypes): JSX.Element => {
  const {
    children,
    className = '',
    shouldUnregister = false,
    shouldFocusError = true,
    initialValues,
    validationScheme,
    buttonConfigs,
    formId,
    onSubmit
  } = props

  const { handleSubmit, register, setValue, control, formState, getValues, watch, reset } = useForm(
    {
      reValidateMode: 'onChange',
      resolver: yupResolver(validationScheme),
      defaultValues: initialValues
    }
  )

  const customSubmit = (data: TFormData) => {
    if (onSubmit) {
      onSubmit(data, formState)
    }
  }

  const { errors, isDirty } = formState
  return (
    <form
      onSubmit={handleSubmit(customSubmit)}
      id={formId}
      className={classnames('form-container', className)}
    >
      <FormContext.Provider
        value={{
          register,
          errors,
          control,
          setValue,
          getValues,
          watch,
          reset,
          isDirty,
          shouldFocusError,
          shouldUnregister
        }}
      >
        <>
          {children}
          {buttonConfigs && (
            <div className="form-container__buttons">
              {buttonConfigs.map((buttonConfig, index) => {
                return <Button {...buttonConfig} key={index} />
              })}
            </div>
          )}
        </>
      </FormContext.Provider>
    </form>
  )
}

export default FormContainer
