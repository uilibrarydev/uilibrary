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
      options: ['xsmall', 'small', 'standard', 'medium', 'large'],
      control: { type: 'radio' }
    },
    weight: {
      options: ['', 'semibold', 'bold', 'bolder'],
      control: { type: 'radio' }
    },
    lineHeight: {
      options: ['', 'small', 'medium', 'large'],
      control: { type: 'radio' }
    }
  }
}

// export const text = (): JSX.Element => {
//   return (
//     <Text size="large" color="inputBorderActive">
//       text
//     </Text>
//   )
// }
const Template = (args) => <TextComp {...args} text={`${args.text}`} />

export const Text = Template.bind({})
Text.args = {
  type: 'primary',
  size: '',
  weight: '',
  lineHeight: 'large',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}
