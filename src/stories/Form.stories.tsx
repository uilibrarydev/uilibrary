import React, { useEffect } from 'react'
import * as yup from 'yup'
import FormField from '../components/FormField'
import { FormContainer, Button, Select, MultiSelect } from '../components'
import { useFormProps } from '../hooks/useFormProps'
import { Checkbox } from '../index'

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  conditions: yup.string().required('validation').nullable()
  // firstname: yup.string().required('validation').nullable()
})

const Template = (): JSX.Element => {
  const INITIAL_VALUES = {
    // list: [{ value: 'armenia', label: 'Armenia' }]
  }

  return (
    <div style={{ maxWidth: 300 }}>
      <FormContainer
        onSubmit={(data) => console.log('data', data)}
        validationScheme={VALIDATION_SCHEME}
        initialValues={INITIAL_VALUES}
      >
        <>
          <Test />
          <Button buttonActionType="submit" buttonText={'Ok'} />
        </>
      </FormContainer>
    </div>
  )
}

export const Test = () => {
  const { setValue, getValues, reset } = useFormProps()

  useEffect(() => {
    setTimeout(() => {
      console.log('reset')

      reset?.({
        list: [{ value: 'armenia', label: 'Armenia' }]
      })
    }, 2000)
  }, [])

  return (
    <>
      <FormField
        dataId={'dasdsa'}
        name={'conditions'}
        className={'mb-20'}
        isNeedChangeHandler
        As={(props) => (
          <Checkbox
            {...props}
            dataId={'dasdsa'}
            beforeLink={'dasdas'}
            label={'dasdsa'}
            link={'dassad'}
          />
        )}
      />
      {/*<FormField*/}
      {/*  className="input-block"*/}
      {/*  name={'list'}*/}
      {/*  As={(props) => {*/}
      {/*    return (*/}
      {/*      <MultiSelect*/}
      {/*        {...props}*/}
      {/*        isGrouped*/}
      {/*        isRequiredField*/}
      {/*        label={'COUNTRIES'}*/}
      {/*        options={OPTIONS_GROUPED}*/}
      {/*      />*/}
      {/*    )*/}
      {/*  }}*/}
      {/*/>*/}
      {/* <FormField
        className="input-block"
        name={'CITIES'}
        As={(props) => {
          return <Select {...props} isRequiredField label={'CITIES'} options={OPTIONS_COUNTRIES} />
        }}
      /> */}
    </>
  )
}
export const Form = Template.bind({})
