import React, { useState } from 'react'
import { FormField, Popup as PopupComp } from '../components'
import FileUpload from '../components/FileUpload/index'

export default {
  title: 'FileUpload',
  component: FileUpload
}

const getFiles = (files: any) => {
  console.log(files)
}

const Template = (): JSX.Element => {
  return (
    <div>
      <FormField
        component={FileUpload}
        name={'file'}
        allowedTypes={['PDF', 'XYZ', 'MKT']}
        label={'attach file'}
        getFile={getFiles}
      />

      {/* <FileUpload  /> */}
    </div>
  )
}
export const FileUploadComponent = Template.bind({})
