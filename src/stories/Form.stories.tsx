import React from 'react'
import * as yup from 'yup'
import FormField from '../components/FormField'
import { FormContainer, Switcher, Select, Button } from '../components'
import { IFormCompProps, TSelectOptions } from '../types/globals'

export default {
  title: 'Form',
  component: FormContainer
}

const OPTIONS: TSelectOptions = [
  {
    value: 'armenia',
    label: 'Armenia',
    meta: 'AM'
  },
  {
    value: 'italy',
    label: 'Italy',
    meta: 'IT'
  },
  {
    value: 'france',
    label: 'France',
    meta: 'FR'
  },
  {
    value: 'spain',
    label: 'Spain',
    meta: 'SP'
  },
  {
    value: 'germany',
    label: 'Germany',
    meta: 'De'
  }
]
const VALIDATION_SCHEME = yup.object({
  switcher: yup.boolean().required(),
  select: yup.string().required()
})

const Template = (): JSX.Element => {
  const INITIAL_VALUES = {
    switcher: false,
    select: OPTIONS[0].value
  }

  return (
    <div style={{ maxWidth: 300 }}>
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
          <FormField
            isControlled
            isNeedChangeHandler
            name={'select'}
            As={(props: IFormCompProps) => {
              return <Select {...props} options={OPTIONS} />
            }}
          />
          <Button buttonActionType="submit" buttonText={'Ok'} />
        </>
      </FormContainer>
    </div>
  )
}
export const Form = Template.bind({})
