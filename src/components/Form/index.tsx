import React from 'react'
import { ReactElement } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'
import { FormPropTypes, TControledCompField } from './types'
import './index.css'

const Form = (props: FormPropTypes): JSX.Element => {
  const { formItems = [], validationScheme } = props

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationScheme)
  })
  const changeHandler = (field: TControledCompField, value: TInputChangeEventType) => {
    if (field.onChange) {
      field.onChange(value)
    }
  }

  console.log('errors', errors)

  return (
    <form onSubmit={handleSubmit((data) => console.log('data', data))}>
      {formItems.map((formItem) => {
        const { name, component: FormComp } = formItem

        return (
          <Controller
            key={name}
            render={({ field }: { field: TControledCompField }): ReactElement<TComponentProps> => {
              return (
                <>
                  <FormComp
                    error={errors[name]?.message}
                    value={field.value}
                    onChange={(value: TInputChangeEventType) => {
                      changeHandler(field, value)
                    }}
                    onBlur={field.onBlur}
                  />
                </>
              )
            }}
            name={name}
            control={control}
          />
        )
      })}
    </form>
  )
}

export default Form
