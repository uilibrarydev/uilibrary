// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import * as yup from 'yup'
import Input from '../components/Input'
import FormField from '../components/FormField'
import { FormContainer } from '../components'
import FileUpload from '../components/FileUpload/index'

export default {
  title: 'Form',
  component: FormContainer
}

const INITIAL_VALUES = { firstName: 'Lilit', phoneNumber: '', file: '', age: '' }

const VALIDATION_SCHEME = yup.object({
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

  return (
    <>
      <FormContainer validationScheme={VALIDATION_SCHEME} initialValues={INITIAL_VALUES}>
        <>
          {/* <FormField isControlled component={Input} name={'firstName'} label="First Name" />
          <FormField
            isControlled
            component={Input}
            name={'phoneNumber'}
            label="Phone Number"
            mask="(+1) 999 999 9999"
            placeholder="(+1) 999 999 9999"
            customOnChange={onChange}
          />
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
            component={Input}
            name="phoneNumber"
            label="Հեռախոսահամար"
            mask="+374 99 99 99 99"
            placeholder="+374 90 00 00 01"
          /> */}
          <FormField
            component={Input}
            name={'phoneNumber'}
            label="Հեռախոսահամար"
            mask="+374 99 99 99 99"
            // customOnChange={onPhoneChange}
            placeholder="+374 90 00 00 01"
          />
        </>
      </FormContainer>
    </>
  )
}
export const Form = Template.bind({})
