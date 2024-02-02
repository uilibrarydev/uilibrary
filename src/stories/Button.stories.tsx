import React from 'react'
import { Button } from '../components/Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'tertiary', 'danger', 'text', 'link'],
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
    isLoading: {
      options: ['true', 'false'],
      control: { isLoading: 'false' }
    }
  }
}

const Template = (args) => <Button {...args} />

export const ButtonPlayground = Template.bind({})
ButtonPlayground.args = {
  iconProps: {
    name: 'home'
  },
  autoFocus: true,
  type: 'primary',
  size: 'large',
  disabled: false,
  isLoading: false,
  buttonText: 'Label',
  onClick: () => console.log('button clicked')
}
