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
  mainMessage: "Sorry, we couldn't find any results",
  paragraphMessage: 'Paragraph text comes here',
  buttonProps: {
    buttonText: 'Button',
    iconProps: {
      name: 'add'
    }
  }
}
