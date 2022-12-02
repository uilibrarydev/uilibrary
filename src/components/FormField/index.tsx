import React, { useContext, useMemo } from 'react'
import { FormContext } from '../../context'
import { TFormFeildPropTypes } from './types'

const FormField = (props: TFormFeildPropTypes): JSX.Element | null => {
  const { component: FormItemComp, name, ...rest } = props
  const { register, errors } = useContext(FormContext)

  const errorMessage = useMemo(() => {
    if (errors[name]) {
      return errors[name].message
    }
    return null
  }, [errors, name])

  if (!register) {
    return null
  }
  return (
    <>
      <FormItemComp {...rest} {...register(name)} />
      <p>{errorMessage}</p>
    </>
  )
}

export default FormField
