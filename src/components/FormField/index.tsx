import React, { useContext, useMemo } from 'react'
import { FormContext } from '../../context'
import { Controller } from 'react-hook-form'
import ErrorMessage from '../../helperComponents/ErrorMessage'
import { TFormFieldPropTypes } from './types'
import './index.scss'

const FormField = (props: TFormFieldPropTypes): JSX.Element | null => {
  const {
    component: FormItemComp,
    name,
    isNeedChangeHandler = false,
    isControlled = false,
    ...rest
  } = props
  const { register, errors, setValue, control } = useContext(FormContext)

  const errorMessage = useMemo(() => {
    if (errors && errors[name]) {
      return errors[name].message
    }
    return null
  }, [errors, name])

  if (!register) {
    return null
  }
  // TODO use classname for set error state with-error-styles

  return (
    <div className="form-field-container">
      {isControlled ? (
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <FormItemComp
              {...rest}
              onChange={onChange}
              name={name}
              value={value}
              onBlur={onBlur}
              ref={ref}
              {...(isNeedChangeHandler ? { setFieldValue: setValue } : {})}
            />
          )}
        />
      ) : (
        <FormItemComp
          {...rest}
          {...register(name)}
          {...(isNeedChangeHandler ? { setFieldValue: setValue } : {})}
        />
      )}

      <ErrorMessage message={errorMessage || ''} />
    </div>
  )
}

export default FormField
