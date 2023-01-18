import React from 'react'
import { Button } from '../index'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'tertiary', 'danger', 'link'],
      control: { type: 'radio' }
    },
    size: {
      options: ['large', 'medium',  'small'],
      control: { type: 'radio' }
    },
    iconAlignment: {
      options: ['left', 'right', 'center'],
      control: { type: 'radio' }
    },
    disabled: {
      options: ['true', 'false'],
      control: { disabled: 'true' }
    }
  }
}

const Template = (args) => <Button {...args} buttonText={`${args.type} button`} />

export const MyButton = Template.bind({})
MyButton.args = {
  iconProps: { name: 'close'},
  iconAlignment: 'left',
  type: 'primary',
  size: 'large',
  disabled: false,
  onClick: () => console.log('iconbutton  buttonClicked')
}
