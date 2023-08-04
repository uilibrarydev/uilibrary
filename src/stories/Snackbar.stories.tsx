import React from 'react'
import { Snackbar as SnackbarComp } from '../components'

export default {
  title: 'Snackbar',
  component: SnackbarComp,
  argTypes: {
    type: {
      options: ['information', 'success', 'error', 'warning'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => <SnackbarComp {...args} />
export const Snackbar = Template.bind({})

Snackbar.args = {
  type: 'information',
  text: 'Prompt text',
  iconProps: {
    name: 'info-hover',
    type: 'information'
  },
  withAction: false
}
