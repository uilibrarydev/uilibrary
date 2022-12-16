// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useMemo } from 'react'
import * as yup from 'yup'
import FormField from '../components/FormField'
import { Checkbox, FormContainer, Text, Input, FileUpload } from '../components'

export default {
  title: 'Form',
  component: FormContainer
}

const INITIAL_VALUES = {
  checkbox: false,
  firstName: 'Lilit',
  phoneNumber: '',
  file: '',
  age: ''
}

const VALIDATION_SCHEME = yup.object({
  checkbox: yup
    .bool()
    .required()
    .test('valid', 'նշել պարտադիր', (val) => val),
  phoneNumber: yup
    .string()
    .required('A file is required')
    .test('valid', 'Phone number is not valid', (val) => {
      const isValid = val?.indexOf('_') === -1
      return !!isValid
    })
})

const getFiles = (files: FileList) => {
  console.log('files', files)
}

const Template = (): JSX.Element => {
  const onChange = (event) => {
    console.log('event', event)
  }

  const checkboxLabel = useMemo(() => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Text>Համաձայն եմ ԱՔՌԱ հարցման կատարմանը</Text>
        <Text color="inputBorderActive" onClick={(e) => e.stopPropagation()}>
          <a
            href="https://github.com/jaredpalmer/formik/issues/1040"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Ավելին
          </a>
        </Text>
      </div>
    )
  }, [])

  const BUTTONS_CONFIG = [
    {
      buttonText: 'Submit Form',
      type: 'primary'
    }
  ]

  return (
    <>
      <FormContainer
        validationScheme={VALIDATION_SCHEME}
        initialValues={INITIAL_VALUES}
        buttonConfigs={BUTTONS_CONFIG}
      >
        <>
          <FormField isControlled component={Input} name={'firstName'} label="First Name" />

          <FormField component={Input} name={'secondname'} label="Second Name" />
          <FormField component={Input} name={'age'} label="Age" />
          <FormField
            component={FileUpload}
            name="file"
            allowedTypes={['PDF', 'XYZ', 'MKT']}
            label="Կցել ֆայլ"
            isNeedChangeHandler
            getFiles={getFiles}
          />

          <FormField
            isNeedChangeHandler
            isControlled
            component={Checkbox}
            name={'checkbox'}
            label={checkboxLabel}
          />
        </>
      </FormContainer>
    </>
  )
}
export const Form = Template.bind({})
