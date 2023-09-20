import React from 'react'
import * as yup from 'yup'
import FormField from '../components/FormField'
import {FormContainer, Button, MultiSelect} from '../components'

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
  test: yup.string().required('validation').nullable(),
  firstname: yup.string().required('validation').nullable()
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
                  emptyListMainMessage: "Sorry, we couldn't find any results"
                }}
                required
                thousandSeparator={','}
                allowLeadingZeros={false}
                allowNegative={false}
                placeholder={'money'}
                maxCount={10}
                leftIconProps={{
                  name: 'moneybox'
                }}
                helperText={'You cannot add more than 1 employees.'}
                options={[
                  {
                    title: 'Software development and automation center',
                    data: [{ label: 'Armen', value: 3 }]
                  }
                ]}
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
