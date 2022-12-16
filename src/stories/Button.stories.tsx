import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Button as ButtonComp } from '../components'

export default {
  title: 'Button',
  component: ButtonComp
} as Meta

const Template: Story<TButtonPropTypes> = (args): JSX.Element => {
  return <ButtonComp {...args} />
}

export const ButtonPrimary = Template.bind({})
ButtonPrimary.args = {
  disabled: true,
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

export const IconButton = Template.bind({})
IconButton.args = {
  iconProps: { name: 'close', size: 'xSmall', color: 'justWhite' },
  buttonText: "I'm disabled button",
  onClick: () => console.log('buttonClicked'),
  type: 'primary'
}
export const ActiveTextButton = Template.bind({})
ActiveTextButton.args = {
  buttonText: "I'm text button",
  onClick: () => console.log('buttonClicked'),
  type: 'activeTextButton'
}

export const PasiveTextButton = Template.bind({})
PasiveTextButton.args = {
  buttonText: "I'm text button",
  iconProps: { name: 'close', size: 'xSmall' },
  onClick: () => console.log('buttonClicked'),
  type: 'passiveTextButton'
}
