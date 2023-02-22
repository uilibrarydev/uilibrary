// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import { FileUpload } from '../components'

export default {
  title: 'FileUpload',
  component: FileUpload
}

const getFiles = (files: FileList) => {
  console.log(files)
}

const Template = (): JSX.Element => {
  return (
    <div style={{ width: 400 }}>
      <FileUpload allowedTypes={['PDF', 'XYZ', 'MKT']} label="Կցել ֆայլ" getFiles={getFiles} />
    </div>
  )
}
export const FileUploadComponent = Template.bind({})
