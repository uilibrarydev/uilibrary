import React, { useMemo } from 'react'
import * as yup from 'yup'
import FormField from '../components/FormField'
import {
  Checkbox,
  FormContainer,
  Text,
  Input,
  FileUpload,
  TimePicker,
  SimpleDatePicker,
  Select,
  TextArea,
  Switcher
} from '../components'
import { IFormCompProps } from '../types/globals'
import { TSelectOption } from '../components/Select/types'

export default {
  title: 'Form',
  component: FormContainer
}

const OPTIONS: TSelectOption[] = [
  {
    value: 'armenia',
    label: 'Armenia'
  },
  {
    value: 'italy',
    label: 'Italy'
  }
]

// const INITIAL_VALUES = {
//   checkbox: false,
//   firstName: 'Lilit',
//   date: '',
//   time: '',
//   textarea: 'sdlknsldn',
//   switcher: false,
//   select: {
//     value: 'armenia',
//     label: 'Armenia'
//   }
// }

const PHONE_NUMBER = 'phone'
const VALIDATION_SCHEME = yup.object({
  // [PHONE_NUMBER]: yup
  //   .string()
  //   .required('phone number is required')
  //   .test('valid', 'Phone number is not valid', (val) => val?.indexOf('_') === -1)
  // select: yup.object().required('requierd field'),
  // date: yup.date().required(),
  switcher: yup.boolean().required()
  // textarea: yup.string().required('A file is required'),
  // time: yup.string().required(),
  // firstName: yup.string().required('A file is required'),
  // checkbox: yup
  //   .bool()
  //   .required('Required field')
  //   .test('valid', 'նշել պարտադիր', (val) => !!val)
})

const getFiles = (file: File) => {
  console.log('files', file)
}

const Template = (): JSX.Element => {
  const INITIAL_VALUES = {
    // select: undefined,
    // checkbox: undefined
    switcher: false
  }

  // const checkboxLabel = useMemo(() => {
  //   return (
  //     <div style={{ display: 'flex', flexDirection: 'column' }}>
  //       <Text>Համաձայն եմ ԱՔՌԱ հարցման կատարմանը</Text>
  //       <Text onClick={(e) => e.stopPropagation()}>
  //         <a
  //           href="https://github.com/jaredpalmer/formik/issues/1040"
  //           target="_blank"
  //           rel="noreferrer"
  //         >
  //           Ավելին
  //         </a>
  //       </Text>
  //     </div>
  //   )
  // }, [])

  const BUTTONS_CONFIG = [
    {
      buttonText: 'Submit Form',
      type: 'primary'
    }
  ]

  return (
    <>
      <FormContainer
        onSubmit={(date) => console.log('sdsd', date)}
        validationScheme={VALIDATION_SCHEME}
        initialValues={INITIAL_VALUES}
        buttonConfigs={BUTTONS_CONFIG}
      >
        <>
          {/* <FormField
            isControlled
            isNeedChangeHandler
            name={'select'}
            As={(props: IFormCompProps) => {
              return <Select {...props} placeHolder="Select country" options={OPTIONS} />
            }}
          />
          <FormField
            isNeedChangeHandler
            isControlled
            name={'checkbox'}
            As={(props: IFormCompProps) => <Checkbox {...props} label={checkboxLabel} />}
          />
          <FormField
            isControlled
            name={PHONE_NUMBER}
            As={(props) => {
              return (
                <Input
                  {...props}
                  label="Հեռախոսահամար"
                  mask="+374 99 99 99 99"
                  placeholder="+374 __ __ __ __"
                />
              )
            }}
          />
          <FormField
            As={(props: IFormCompProps) => {
              return <Input {...props} label="First Name" />
            }}
            name={'firstName'}
          />
          <FormField
            isControlled
            name={'date'}
            isNeedChangeHandler
            As={(props: IFormCompProps) => <SimpleDatePicker {...props} label="date picker" />}
          />
          <FormField
            isControlled
            isNeedChangeHandler
            As={(props) => <TimePicker {...props} label="time picker" />}
            name={'time'}
          />
          <FormField
            As={(props: IFormCompProps) => (
              <FileUpload
                {...props}
                allowedTypes={['PDF', 'XYZ', 'MKT']}
                label="Կցել ֆայլ"
                getFiles={getFiles}
              />
            )}
            name="file"
            isNeedChangeHandler
          />
          <FormField
            isNeedChangeHandler
            isControlled
            name={'checkbox'}
            As={(props: IFormCompProps) => <Checkbox {...props} label={checkboxLabel} />}
          />
          <FormField
            isControlled
            isNeedChangeHandler
            name={'select'}
            As={(props: IFormCompProps) => {
              return <Select {...props} placeHolder="Select country" options={OPTIONS} />
            }}
          />
          <FormField
            name={'textarea'}
            As={(props: IFormCompProps) => {
              return <TextArea {...props} placeHolder="Select country" />
            }}
          /> */}
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
