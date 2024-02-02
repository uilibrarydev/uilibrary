// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react'
import { FileUpload } from '../components/FileUpload'
import { Icon } from '../components/Icon'

export default {
  title: 'FileUpload',
  component: FileUpload
}

const getFiles = (files: FileList) => {
  console.log('getFiles', files)
}

const Template = (args): JSX.Element => {
  const [files, setFiles] = useState([])
  const getFiles = (_files) => {
    console.log('_files', _files)
    if (_files && _files.length) {
      setFiles(_files)
    }
  }
  return (
    <div style={{ width: 400 }}>
      <FileUpload
        {...args}
        getFiles={getFiles}
        fileAllowedSize={9000000}
        uploadedFiles={files}
        onError={(type) => console.log('type', type)}
      />
    </div>
  )
}
export const FileUploadPlayground = Template.bind({})

FileUploadPlayground.args = {
  label: 'Label',
  buttonText: 'Attach file',
  isFileUploaded: false,
  labelAddons: <Icon name={'info'} size={'xsmall'} type={'information'} className={'ml-4'} />
}
