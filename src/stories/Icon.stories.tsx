import React from 'react'
import { Meta } from '@storybook/react'
import { Icon as IconComp } from '../components'

export default {
  title: 'Icon',
  component: IconComp
} as Meta

const Template = () => <IconComp name="icon" size="small" color="red" />
const FileUpload = () => <IconComp name="fileUpload" size="small" color="red" withWrapper />

export const Icon = Template.bind({})
export const fileUpload = FileUpload.bind({})
