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

const VALIDATION_SCHEME = yup.object({
  obj: yup.object().shape({ name: yup.string().required(), surname: yup.string().required() }),
  switcher: yup.boolean().required(),
  firstname: yup.string().required(),
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
    counter: 9
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
            isNeedChangeHandler
            name={'switcher'}
            As={(props: IFormCompProps) => {
              return <Switcher {...props} />
            }}
          />
          {/* <FormField
            
            isNeedChangeHandler
            name={'select'}
            As={(props: IFormCompProps) => {
              return <Select {...props} label="jjjj" isRequiredField options={OPTIONS} />
            }}
          />
          <FormField
            
            isNeedChangeHandler
            name={'multiselect'}
            As={(props: IFormCompProps) => {
              return (
                <MultiSelect
                  {...props}
                  options={[
                    {
                      label: 'label'
                    }
                  ]}
                />
              )
            }}
          />
          <FormField
            isControlled
            isNeedChangeHandler
            name={'radio'}
            As={(props: IFormCompProps) => {
              return <RadioGroup {...props} isGrouped options={OPTIONS_GROUPED} />
            }}
          />

          <FormField
            isControlled
            isNeedChangeHandler
            name="counter"
            As={(props) => <Counter {...props} />}
          />

          <FormField
            
            name={'esiminch'}
            As={(props: IFormCompProps) => (
              <Input required label="Unit name" placeholder="Unit name" {...props} />
            )}
          /> */}

          <FormField
            isNeedChangeHandler
            name={'obj.name'}
            As={(props) => <Input label="name" {...props} />}
          />

          <FormField
            isNeedChangeHandler
            name={'obj.surname'}
            As={(props) => <Input label="surname" {...props} />}
          />

          <FormField
            isNeedChangeHandler
            name={'firstname'}
            As={(props) => <Input label="firstname" {...props} />}
          />

          <Button buttonActionType="submit" buttonText={'Ok'} />
        </>
      </FormContainer>
    </div>
  )
}
export const Form = Template.bind({})
