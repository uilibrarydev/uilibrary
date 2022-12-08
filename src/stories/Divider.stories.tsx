import React from 'react'
import { Meta } from '@storybook/react'
import { Divider as DividerComp } from '../components'

export default {
  title: 'Divider',
  component: DividerComp
} as Meta

const Template = () => <DividerComp />

export const Divider = Template.bind({})
