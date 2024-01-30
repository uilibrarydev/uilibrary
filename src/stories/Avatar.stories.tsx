import React from 'react'
import { Avatar as AvatarComp } from '../components'

import imageFile from '../assets/images/avatar.jpg'

const image = {
  src: imageFile,
  alt: 'my image'
}
export default {
  title: 'Avatar',
  component: AvatarComp,
  argTypes: {
    color: {
      options: ['default', 'purple', 'blue', 'green', 'red'],
      control: { type: 'radio' }
    },
    type: {
      options: ['', 'count'],
      control: { type: 'radio' }
    },
    size: {
      options: ['xlarge', 'large', 'medium', 'small', 'xsmall', 'xxsmall'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => <AvatarComp {...args} />

export const Avatar = Template.bind({})

Avatar.args = {
  initials: 'AG',
  color: 'default',
  size: 'large',
  isEditable: true,
  imagePath: image.src,
  onAvatarChange: (file: File) => {
    console.log(file)
  }
}
