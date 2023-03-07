import React from 'react'
import * as yup from 'yup'
import FormField from '../components/FormField'
import { FormContainer, Switcher } from '../components'
import { IFormCompProps } from '../types/globals'

export default {
  title: 'Form',
  component: FormContainer
}

const VALIDATION_SCHEME = yup.object({
  switcher: yup.boolean().required(),
  radioGroup: yup.number().required()
})

const Template = (): JSX.Element => {
  const INITIAL_VALUES = {
    switcher: false,
    radioGroup: 1
  }

  return (
    <>
      <FormContainer
        onSubmit={(date) => console.log('sdsd', date)}
        validationScheme={VALIDATION_SCHEME}
        initialValues={INITIAL_VALUES}
      >
        <>
          <FormField
            isControlled
            isNeedChangeHandler
            name={'switcher'}
            As={(props: IFormCompProps) => {
              return <Switcher {...props} />
            }}
          />
        </>
      </FormContainer>
    </>
  )
}
export const Form = Template.bind({})
