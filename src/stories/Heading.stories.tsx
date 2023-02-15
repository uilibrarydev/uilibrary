import React from 'react'
import { Heading as HeadingComp } from '../components'

export default {
  title: 'Heading',
  component: HeadingComp,
  argTypes: {
    type: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'radio' }
    },
    size: {
      options: ['xsmall', 'small', 'standard', 'medium', 'large', 'xlarge'],
      control: { type: 'radio' }
    },
    weight: {
      options: ['regular', 'semibold', 'bold'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => <HeadingComp {...args}>{args.text} {args.size} {args.weight}</HeadingComp>

export const Heading = Template.bind({})
Heading.args = {
  type: 'h1',
  size: 'xsmall',
  weight: 'regular',
  text: 'heading'
}
