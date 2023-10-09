// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import { FileUpload as FileUploadComp } from '../components'
import { Icon } from '../index'

export default {
  title: 'FileUpload',
  component: FileUploadComp
}

const getFiles = (files: FileList) => {
  console.log('getFiles', files)
}

const Template = (args): JSX.Element => {
  return (
    <div style={{ width: 400 }}>
      <FileUploadComp {...args} getFiles={getFiles} />
    </div>
  )
}
export const FileUpload = Template.bind({})

FileUpload.args = {
  label: 'Label',
  buttonText: 'Attach file',
  isFileUploaded: false,
  allowedTypes: ['PDF'],
  labelAddons: <Icon name={'info'} size={'xsmall'} type={'information'} className={'ml-4'} />
}
