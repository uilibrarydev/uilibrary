import React from 'react'
import { Meta } from '@storybook/react'
import { Icon as IconComp } from '../components'

export default {
  title: 'Icon',
  component: IconComp
} as Meta

const Template = () => <IconComp name="icon" size="small" color="inputBorderError" />
const FileUpload = () => (
  <IconComp name="file_png" size="small" color="inputBorderError" withWrapper />
)

export const Icon = Template.bind({})
export const fileUpload = FileUpload.bind({})
