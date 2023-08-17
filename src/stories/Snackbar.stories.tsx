import React, { useState } from 'react'
import { Button, Snackbar as SnackbarComp } from '../components'

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

const Template = (args) => {
  const [isVisible, setVisibility] = useState(false)

  const closeSnackbar = () => setVisibility(false)

  return (
    <div>
      <Button buttonText={'open snackbar'} onClick={() => setVisibility(true)} />

      <SnackbarComp
        {...args}
        isVisible={isVisible}
        closeSnackbar={closeSnackbar}
        actionProps={{ buttonText: 'Close', onClick: closeSnackbar }}
      />
    </div>
  )
}
export const Snackbar = Template.bind({})

Snackbar.args = {
  type: 'information',
  text: 'Prompt text'
}
