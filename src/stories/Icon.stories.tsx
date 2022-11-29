import React from 'react'
import { Meta } from '@storybook/react'
import { Icon as IconComp } from '../components'

export default {
  title: 'Icon',
  component: IconComp
} as Meta

const Template = () => <IconComp name="icon" size="small" color="red" />

export const Icon = Template.bind({})
