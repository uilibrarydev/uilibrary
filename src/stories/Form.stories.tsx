import React from 'react'
import * as yup from 'yup'
import FormField from '../components/FormField'
import { FormContainer, Button, Input, Select } from '../components'

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

const OPTIONS_COUNTRIES: TSelectOptions = [
  {
    value: 1,
    label: 'Armenia',
    meta: 'AM'
  },
  {
    value: 2,
    label: 'Italy',
    meta: 'IT'
  },
  {
    value: 3,
    label: 'France',
    meta: 'FR'
  },
  {
    value: 4,
    label: 'Spain',
    meta: 'SP'
  },
  {
    value: 5,
    label: 'Germany',
    meta: 'De'
  },
  {
    value: 6,
    label: 'Australia',
    meta: 'AU'
  },
  {
    value: 7,
    label: 'Hungary',
    meta: 'HY'
  },
  {
    value: 8,
    label: 'Georgia',
    meta: 'GE'
  },
  {
    value: 9,
    label: 'Brazil',
    meta: 'BR'
  },
  {
    value: 10,
    label: 'Norway',
    meta: 'NR'
  },
  {
    value: 11,
    label: 'Mexico',
    meta: 'MC'
  }
]

const VALIDATION_SCHEME = yup.object({
  firstname: yup.string().required('validation.required')
})

const Template = (): JSX.Element => {
  const INITIAL_VALUES = {
    firstname: 5
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
            className="mb-20"
            name={'firstname'}
            As={(props) => {
              return <Select {...props} options={OPTIONS_COUNTRIES} />
            }}
          />
          {/*<FormField*/}
          {/*  name={'firstname'}*/}
          {/*  As={(props) => (*/}
          {/*    <Input*/}
          {/*      {...props}*/}
          {/*      required*/}
          {/*      label={'firstname'}*/}
          {/*      mask={'15700 99999999999'}*/}
          {/*      placeholder="15700 __ ______"*/}
          {/*    />*/}
          {/*  )}*/}
          {/*/>*/}

          <Button buttonActionType="submit" buttonText={'Ok'} />
        </>
      </FormContainer>
    </div>
  )
}
export const Form = Template.bind({})
