import React from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import imageFile from '../assets/images/avatar.jpg'
import { Avatar } from '../components/Avatar'

const image = {
  src: imageFile,
  alt: 'my image'
}
export default {
  title: 'Avatar',
  component: Avatar,
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

const Template = (args) => <Avatar {...args} />

export const AvatarPlayground = Template.bind({})

AvatarPlayground.args = {
  initials: 'AG',
  color: 'default',
  size: 'large',
  isEditable: true,
  imagePath: image.src,
  onAvatarChange: (file: File) => {
    console.log(file)
  }
}
