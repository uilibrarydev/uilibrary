import React from 'react'
import * as yup from 'yup'
import FormField from '../components/FormField'
import {
  FormContainer,
  Switcher,
  Button,
  FileUpload,
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
  files: yup
    .array()
    .of(
      yup
        .mixed()
        .test(
          'fileSize',
          'File size is too large',
          (value) => !value || value.size <= 3 * 1024 * 1024
        )
    )
    .required('Please select at least one file.')
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
        onSubmit={(data) => console.log('data', data)}
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
          <FormField
            name={'files'}
            As={(props) => (
              <FileUpload
                label={'files'}
                buttonText={'Attach'}
                allowedTypes={'.pdf, .dmg'}
                multiple={false}
                {...props}
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
