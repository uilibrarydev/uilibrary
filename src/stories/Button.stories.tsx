import React from 'react'
import { Button } from '../index'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'disabled', 'passiveTextButton', 'activeTextButton'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => <Button {...args} />

export const MyButton = Template.bind({})
MyButton.args = {
  iconProps: { name: 'close', size: 'xSmall', color: 'justWhite' },
  type: 'primary',
  buttonText: "I'm primary button",
  onClick: () => console.log('iconbutton  buttonClicked')
}
