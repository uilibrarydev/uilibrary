import React from 'react'
import { FormContext } from '../../context'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { FormPropTypes } from './types'
import './index.scss'

const FormContainer = (props: FormPropTypes): JSX.Element => {
  const { children, initialValues, validationScheme } = props

  const {
    handleSubmit,
    formState: { errors },

    register,
    setValue,
    control
  } = useForm({
    reValidateMode: 'onChange',
    resolver: yupResolver(validationScheme),
    defaultValues: initialValues
  })

  return (
    <form onSubmit={handleSubmit((data) => console.log('data', data))} className="form_container">
      <FormContext.Provider value={{ register, errors, control, setValue }}>
        {children}
      </FormContext.Provider>
    </form>
  )
}

export default FormContainer
