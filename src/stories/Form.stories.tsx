import React from 'react'
import * as yup from 'yup'
import FormField from '../components/FormField'
import { FormContainer, Switcher, Select, Button, MultiSelect, Input } from '../components'

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

const OPTIONS_CITIES: TSelectOptions = [
  {
    value: 'yerevan',
    label: 'Yerevan'
  },
  {
    value: 'rome',
    label: 'Rome'
  },
  {
    value: 'paris',
    label: 'Paris'
  },
  {
    value: 'aaaa',
    label: 'iiii'
  }
]

const OPTIONS_GROUPED: TSelectGroupOptions = [
  {
    title: 'Countries',
    data: OPTIONS
  },
  {
    title: 'Cities',
    data: OPTIONS_CITIES
  }
]

const VALIDATION_SCHEME = yup.object({
  switcher: yup.boolean().required(),
  select: yup.string().required(),
  multiselect: yup.array().required(),
  ['esiminch']: yup.string().required('sdsd')
})

const Template = (): JSX.Element => {
  const INITIAL_VALUES = {
    switcher: false,
    select: null,
    multiselect: []
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
              return <Select {...props} label="jjjj" isRequiredField options={OPTIONS} />
            }}
          />
          <FormField
            isControlled
            isNeedChangeHandler
            name={'multiselect'}
            As={(props: IFormCompProps) => {
              return <MultiSelect {...props} isGrouped options={OPTIONS_GROUPED} />
            }}
          />

          <FormField
            isControlled
            name={'esiminch'}
            As={(props: IFormCompProps) => (
              <Input required label="Unit name" placeholder="Unit name" {...props} />
            )}
          />

          <Button buttonActionType="submit" buttonText={'Ok'} />
        </>
      </FormContainer>
    </div>
  )
}
export const Form = Template.bind({})
