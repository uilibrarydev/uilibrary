import React from 'react'
import * as yup from 'yup'
import FormField from '../components/FormField'
import {FormContainer, Button, Input, MultiSelect} from '../components'

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

const RADIO_OPTIONS = [
  {
    label: 'Text1',
    value: '1'
  },
  {
    label: 'Text2',
    value: '2'
  },
  {
    label: 'Text3',
    value: '3'
  }
]

const VALIDATION_SCHEME = yup.object({
  test: yup.string().required('validation').nullable(),
  firstname: yup.string().required('validation').nullable()
})

const Template = (): JSX.Element => {
  const INITIAL_VALUES = {
    firstname: null
  }

  return (
    <div style={{ maxWidth: 300 }}>
      <FormContainer
        onSubmit={(data) => console.log('data', data)}
        validationScheme={VALIDATION_SCHEME}
        initialValues={INITIAL_VALUES}
      >
        <>
          <FormField
              name={'attachedEmployees'}
              As={(props) => (
                  <MultiSelect
                      {...props}
                      isGrouped
                      label={'attachedEmployees'}
                      maxSelectCount={1}
                      translations={{
                        innerLabel: 'Selected employees',
                        clearAllLabel: 'Clear All',
                        overflowText: '%s selected',
                        emptyListMainMessage: 'Sorry, we couldn\'t find any results',
                      }}
                      helperText={'You cannot add more than 1 employees.'}
                      options={[{
                        title : 'Software development and automation center',
                        data: [{label: 'Armen', value: 3}, ]
                      }]}
                  />
              )}
          />
          <Button buttonActionType="submit" buttonText={'Ok'} />
        </>
      </FormContainer>
    </div>
  )
}
export const Form = Template.bind({})
