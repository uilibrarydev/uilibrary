import React from 'react'
import { Button as ButtonComp } from '../index'

export default {
  title: 'Button',
  component: ButtonComp,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'tertiary', 'danger', 'link'],
      control: { type: 'radio' }
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' }
    },
    disabled: {
      options: ['true', 'false'],
      control: { disabled: 'true' }
    },
    justIcon: {
      options: ['true', 'false'],
      control: { disabled: 'false' }
    },
    isLoading: {
      options: ['true', 'false'],
      control: { disabled: 'false' }
    }
  }
}

const Template = (args) => <ButtonComp {...args} buttonText={`${args.type} button`} />

export const Button = Template.bind({})
Button.args = {
  iconProps: {
    name: 'close',
    alignment: 'left'
  },
  type: 'primary',
  size: 'large',
  justIcon: false,
  disabled: false,
  isLoading: false,
  onClick: () => console.log('iconbutton  buttonClicked')
}
