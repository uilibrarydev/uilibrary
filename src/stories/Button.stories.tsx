import React from 'react'
import { Button } from '../index'
import { noop } from '../utils'

export default {
  title: 'Button',
  component: Button,
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

const Template = (args) => (
  <Button
    onClick={noop}
    type="tertiary"
    buttonText="Վերադառնալ"
    iconProps={{ name: 'arrow_left', size: 'xSmall' }}
  />
)

export const MyButton = Template.bind({})
MyButton.args = {
  iconProps: {
    name: 'close',
    alignment: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    }
  },
  type: 'primary',
  size: 'large',
  justIcon: false,
  disabled: false,
  isLoading: false,
  onClick: () => console.log('iconbutton  buttonClicked')
}
