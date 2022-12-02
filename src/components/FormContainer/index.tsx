import React from 'react'
import { FormContext } from '../../context'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { FormPropTypes } from './types'
import './index.css'

const FormContainer = (props: FormPropTypes): JSX.Element => {
  const { children, initialValues, validationScheme } = props

  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm({
    resolver: yupResolver(validationScheme),
    defaultValues: initialValues
  })

  // const methods = useFormContext();

  return (
    <form onSubmit={handleSubmit((data) => console.log('data', data))}>
      <FormContext.Provider value={{ register, errors }}>
        {children}
        <input type="submit" />
      </FormContext.Provider>
    </form>
  )
}

export default FormContainer
