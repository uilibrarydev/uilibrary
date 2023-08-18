import React from 'react'
import * as yup from 'yup'
import FormField from '../components/FormField'
import {
  FormContainer,
  Switcher,
  Select,
  Button,
  MultiSelect,
  Input,
  Counter,
  RadioGroup
} from '../components'

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
  counter: yup.number().typeError('required').required('validation.required').min(5).max(90),
  obj: yup.object().shape({ name: yup.string().required(), surname: yup.string().required() }),
  switcher: yup.boolean().required(),
  firstname: yup.string().required().min(19),
  select: yup.string().required(),
  multiselect: yup.array().required(),
  ['esiminch']: yup.string().required('sdsd')
})

const Template = (): JSX.Element => {
  const INITIAL_VALUES = {
    obj: {
      name: '',
      surname: ''
    },
    firstname: '',
    switcher: false,
    select: null,
    multiselect: [],
    counter: 9,
    radio: '2'
  }

  return (
    <div style={{ maxWidth: 300 }}>
      <FormContainer
        onSubmit={(data, fieldData) => console.log('sdsd', data, fieldData)}
        validationScheme={VALIDATION_SCHEME}
        initialValues={INITIAL_VALUES}
      >
        <>
          <FormField
            name={'switcher'}
            As={(props: IFormCompProps) => {
              return <Switcher {...props} />
            }}
          />

          <FormField name="counter" As={(props) => <Counter {...props} min={5} max={90} />} />

          <FormField
            name={'radio'}
            As={(props: IFormCompProps) => {
              return <RadioGroup {...props} options={RADIO_OPTIONS} />
            }}
          />

          <FormField name={'obj.name'} As={(props) => <Input label="name" {...props} />} />

          <FormField name={'obj.surname'} As={(props) => <Input label="surname" {...props} />} />

          <FormField name={'firstname'} As={(props) => <Input label="firstname" {...props} />} />

          <Button buttonActionType="submit" buttonText={'Ok'} />
        </>
      </FormContainer>
    </div>
  )
}
export const Form = Template.bind({})
