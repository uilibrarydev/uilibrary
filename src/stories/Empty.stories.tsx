import React from 'react'
import { Empty as EmptyComp } from '../components'

export default {
  title: 'Empty',
  component: EmptyComp,
  argTypes: {
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' }
    }
  }
}
const Template = (args) => {
  return <EmptyComp {...args} />
}

export const Empty = Template.bind({})

Empty.args = {
  size: 'large',
  mainMessage: 'Main Message',
  paragraphMessage: 'Paragraph Message',
  buttonProps: {
    buttonText: 'Button',
    iconProps: {
      name: 'add'
    }
  }
}
