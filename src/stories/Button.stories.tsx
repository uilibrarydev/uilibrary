import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Button as ButtonComp } from '../components'
import { TButtonPropTypes } from '../components/Button/types'

export default {
  title: 'Button',
  component: ButtonComp
} as Meta

const Template: Story<TButtonPropTypes> = (args): JSX.Element => {
  return <ButtonComp {...args} />
}

export const ButtonPrimary = Template.bind({})
ButtonPrimary.args = {
  buttonText: "I'm primary button",
  onClick: () => console.log('buttonClicked'),
  type: 'primary'
}

export const ButtonSecondary = Template.bind({})
ButtonSecondary.args = {
  buttonText: "I'm secondary button",
  onClick: () => console.log('buttonClicked'),
  type: 'secondary'
}
export const ButtonDisabled = Template.bind({})
ButtonDisabled.args = {
  buttonText: "I'm disabled button",
  onClick: () => console.log('buttonClicked'),
  type: 'disabled'
}
