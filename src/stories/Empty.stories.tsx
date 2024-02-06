import React from 'react'
import { Empty as _Empty } from '../index'

export default {
  title: 'Empty',
  component: _Empty,
  argTypes: {
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' }
    }
  }
}
const Template = (args) => {
  return <_Empty {...args} />
}

export const Empty = Template.bind({})

Empty.args = {
  size: 'large',
  mainMessage: "Sorry, we couldn't find any results",
  paragraphMessage: 'Paragraph text comes here',
  buttonProps: {
    buttonText: 'Button',
    iconProps: {
      name: 'add'
    }
  }
}
