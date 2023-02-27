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
    }
  }
} as Meta

const Template = (args) => (
  <div style={{ width: 300, height: 300 }}>
    <ImageComp {...args} />
  </div>
)

export const Image = Template.bind({})
Image.args = {
  isBackgroundImage: false,
  imagePath: image.src,
  backgroundSize: 'contain',
  isFullWidth: false,
  isFullHeight: false
}
