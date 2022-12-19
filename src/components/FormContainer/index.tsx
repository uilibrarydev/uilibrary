import React from 'react'
import { FormContext } from '../../context'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { FormPropTypes } from './types'
import './index.scss'
import Button from '../Button'
import { noop } from '../../utils'

const FormContainer = (props: FormPropTypes): JSX.Element => {
  const { children, initialValues, validationScheme, buttonConfigs, onSubmit } = props

  const {
    handleSubmit,
    register,
    setValue,
    control,
    formState: { errors }
  } = useForm({
    reValidateMode: 'onChange',
    resolver: yupResolver(validationScheme),
    defaultValues: initialValues
  })

  return (
    <form onSubmit={handleSubmit(onSubmit || noop)} className="form_container">
      <FormContext.Provider value={{ register, errors, control, setValue }}>
        {children}
        {buttonConfigs && (
          <div className="buttons_container">
            {buttonConfigs.map((buttonConfig, index) => {
              return <Button {...buttonConfig} key={index} />
            })}
          </div>
        )}
      </FormContext.Provider>
    </form>
  )
}

export default FormContainer
