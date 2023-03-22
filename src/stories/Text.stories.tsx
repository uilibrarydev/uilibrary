import React from 'react'
import { Text as TextComp } from '../components'

export default {
  title: 'Text',
  component: TextComp,
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
      <TextComp {...args}>{args.text}</TextComp>
    </div>
  )
}

export const Text = Template.bind({})
Text.args = {
  type: 'primary',
  size: 'standard',
  lineHeight: 'large',
  weight: 'regular',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}
