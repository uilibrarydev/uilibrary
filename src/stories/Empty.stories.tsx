import React from 'react'
import { Empty as EmptyComp } from '../components'

export default {
  title: 'Empty',
  component: EmptyComp,
  argTypes: {
    type: {
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
  type: 'Label',
  mainMessage: 'Main Message',
  paragraphMessage: 'Paragraph Message',
  buttonProps: {
    buttonText: 'Button',
    iconProps: {
      name: 'add'
    }
  }
}
