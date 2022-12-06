import React from 'react'
import { FormContext } from '../../context'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { FormPropTypes } from './types'

const FormContainer = (props: FormPropTypes): JSX.Element => {
  const { children, initialValues, validationScheme } = props

  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue
  } = useForm({
    resolver: yupResolver(validationScheme),
    defaultValues: initialValues
  })

  return (
    <form onSubmit={handleSubmit((data) => console.log('data', data))}>
      <FormContext.Provider value={{ register, errors, setValue }}>{children}</FormContext.Provider>
      <input type="submit" />
    </form>
  )
}

export default FormContainer
