// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import { IMAGE_MIME_TYPE } from '../consts'
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
    <div style={{ width: 400 }}>
      <FormField
        component={FileUpload}
        name="file-uplaod"
        allowedTypes={IMAGE_MIME_TYPE}
        label="Կցել Անձը հաստատող փաստաթուղթ"
        getFiles={getFiles}
      />
    </div>
  )
}
export const FileUploadComponent = Template.bind({})
