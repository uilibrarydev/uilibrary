// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import { FormField, FileUpload } from '../components'

export default {
  title: 'FileUpload',
  component: FileUpload
}

const getFiles = (files: FileList) => {
  console.log(files)
}

const Template = (): JSX.Element => {
  return (
    <FormField
      component={FileUpload}
      name="file-uplaod"
      allowedTypes={['PDF', 'XYZ', 'MKT']}
      label="Կցել ֆայլ"
      getFiles={getFiles}
    />
  )
}
export const FileUploadComponent = Template.bind({})
