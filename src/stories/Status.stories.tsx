import React from 'react'
import { Status as StatusComp } from '../components'

export default {
  title: 'Status',
  component: StatusComp,
  argTypes: {
    type: {
      options: [
        'primary',
        'disabled',
        'brand',
        'danger',
        'warning',
        'success',
        'information',
        'discovery'
      ],
      control: { type: 'radio' }
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => <StatusComp {...args} />

export const Status = Template.bind({})

Status.args = {
  text: 'Status label',
  type: 'primary',
  size: 'large',
  noIcon: false,
  leftIconProps: {
    name: 'user'
  },
  rightIconProps: {
    name: 'info'
  }
}
