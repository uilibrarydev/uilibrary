import React from 'react'
import { Meta } from '@storybook/react'
import { Image as ImageComp } from '../components'

import imageFile from '../assets/images/avatar.jpg'

const image = {
  src: imageFile,
  alt: 'my image'
}

export default {
  title: 'Image',
  component: ImageComp,
  argTypes: {
    backgroundSize: {
      options: ['cover', 'contain'],
      control: { type: 'radio' }
    },
    ratio: {
      options: ['1/1', '2/1', '3/1', '4/3', '16/9', '1/1.618', '2/3'],
      control: { type: 'radio' }
    }
  }
} as Meta

const Template = (args) => (
  <div style={{ width: 300 }}>
    <ImageComp {...args} />
  </div>
)

export const Image = Template.bind({})
Image.args = {
  imagePath: image.src,
  isBackgroundImage: false,
  backgroundSize: 'contain',
  isFullWidth: false,
  isFullHeight: false,
  ratio: '1/1'
}
