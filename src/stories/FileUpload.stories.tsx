// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react'
import { FileUpload as _FileUpload } from '../components/FileUpload'
import { Icon } from '../components/Icon'

export default {
  title: 'FileUpload',
  component: _FileUpload
}

const getFiles = (files: FileList) => {
  console.log('getFiles', files)
}

const Template = (args): JSX.Element => {
  const [files, setFiles] = useState([])
  const getFiles = (_files) => {
    if (_files && _files.length) {
      setFiles(_files)
    }
  }
  return (
    <div style={{ width: 400 }}>
      <_FileUpload
        {...args}
        getFiles={getFiles}
        fileAllowedSize={9000000}
        uploadedFiles={files}
        onError={(type) => console.log('type', type)}
      />
    </div>
  )
}
export const FileUpload = Template.bind({})

FileUpload.args = {
  label: 'Label',
  buttonText: 'Attach file',
  isFileUploaded: false,
  labelAddons: <Icon name={'info'} size={'xsmall'} type={'information'} className={'ml-4'} />
}
