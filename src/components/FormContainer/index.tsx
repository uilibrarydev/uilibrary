import React from 'react'
import { useForm } from 'react-hook-form'
import { FormContext } from '../../context'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormPropTypes } from './types'
import Button from '../Button'
import { noop } from '../../utils'
import '../../assets/styles/components/_form.scss'

const FormContainer = (props: FormPropTypes): JSX.Element => {
  const {
    children,
    className = '',
    initialValues,
    validationScheme,
    buttonConfigs,
    onSubmit
  } = props

  const {
    handleSubmit,
    register,
    setValue,
    control,
    formState: { errors },
    getValues,
    watch,
    reset
  } = useForm({
    reValidateMode: 'onChange',
    resolver: yupResolver(validationScheme),
    defaultValues: initialValues
  })

  return (
    <form onSubmit={handleSubmit(onSubmit || noop)} className={`form-container ${className}`}>
      <FormContext.Provider
        value={{ register, errors, control, setValue, getValues, watch, reset }}
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
