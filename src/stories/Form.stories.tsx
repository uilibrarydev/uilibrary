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

const INITIAL_VALUES = { firstName: 'Lilit', file: '' }

const VALIDATION_SCHEME = yup.object({
  firstName: yup.string().required(),
  file: yup
    .mixed()
    .required('A file is required')
    .test('fileSize', 'File too large', (value) => {
      return value.size < 10000
    })
})

const getFiles = (files: any) => {
  console.log('files', files)
}

const Template = (): JSX.Element => {
  return (
    <>
      <FormContainer validationScheme={VALIDATION_SCHEME} initialValues={INITIAL_VALUES}>
        <>
          <FormField component={Input} name={'firstName'} label="First Name" />
          <FormField component={Input} name={'secondname'} label="Second Name" />
          <FormField component={Input} name={'age'} label="Age" />
          <FormField
            component={FileUpload}
            name={'file'}
            allowedTypes={['PDF', 'XYZ', 'MKT']}
            label={'attach file'}
            getFiles={getFiles}
          />
        </>
      </FormContainer>
    </>
  )
}
export const Form = Template.bind({})
