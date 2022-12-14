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
    customOnChange,
    ...rest
  } = props
  const { register, errors, setValue, control } = useContext(FormContext)

  const errorMessage = errors && errors[name] ? errors[name].message : null
  console.log('errorMessage', errorMessage)

  const changeHandler =
    (onChange: (event: TInputChangeEventType) => void) => (event: TInputChangeEventType) => {
      if (customOnChange) {
        customOnChange(event)
      }
      onChange(event)
    }
  if (!register) {
    return null
  }
  // TODO use classname for set error state with-error-styles

  return (
    <div className="form_field_container">
      {isControlled ? (
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <FormItemComp
              {...rest}
              onChange={changeHandler(onChange)}
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
          onChange={(event) => {
            const { onChange } = register(name) || {}
            changeHandler(onChange)(event)
          }}
          {...(isNeedChangeHandler ? { setFieldValue: setValue } : {})}
        />
      )}

      {errorMessage && <ErrorMessage message={errorMessage || ''} />}
    </div>
  )
}

export default FormField
