import React from 'react'
import { Empty as _Empty } from '../index'
import IconAdd from '../components/SVGIcons/IconAdd'
import { StoryFn } from '@storybook/react'
import { TEmptyProps } from '../components/Empty/types'

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
const Template: StoryFn<TEmptyProps> = (args) => {
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
      Component: IconAdd
    }
  }
}
