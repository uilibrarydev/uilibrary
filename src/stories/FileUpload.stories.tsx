// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import { FileUpload as FileUploadComp } from '../components'

export default {
  title: 'FileUpload',
  component: FileUploadComp,
}

const getFiles = (files: FileList) => {
  console.log(files)
}

const Template = (args): JSX.Element => {
  return (
    <div style={{ width: 400 }}>
      <FileUploadComp {...args} allowedTypes={['PDF', 'XYZ', 'MKT']}  getFiles={getFiles} />
    </div>
  )
}
export const FileUpload = Template.bind({})

FileUpload.args = {
  label : 'Attach file',
  isFileUploaded: false
}