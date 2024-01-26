import React from 'react'
import { Text } from '../components/Text'
import '../assets/styles/index.scss'

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    type: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'disabled',
        'inverse',
        'selected',
        'brand',
        'danger',
        'warning',
        'success',
        'information',
        'discovery'
      ],
      control: { type: 'radio' }
    },
    size: {
      options: ['xxsmall', 'xsmall', 'small', 'standard', 'medium', 'large'],
      control: { type: 'radio' }
    },
    lineHeight: {
      options: ['xsmall', 'small', 'medium', 'large'],
      control: { type: 'radio' }
    },
    weight: {
      options: ['regular', 'semibold', 'bold', 'bolder'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => {
  return (
    <div style={{ padding: '20px', backgroundColor: `${args.type == 'inverse' ? '#919191' : ''}` }}>
      <Text {...args}>{args.text}</Text>
    </div>
  )
}

export const TextPlayground = Template.bind({})
TextPlayground.args = {
  type: 'primary',
  size: 'standard',
  lineHeight: 'large',
  weight: 'regular',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
}
