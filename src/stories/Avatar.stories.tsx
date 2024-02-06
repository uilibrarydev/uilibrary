import React from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import imageFile from '../assets/images/avatar.jpg'
import { Avatar as _Avatar, AvatarGroup as _AvatarGroup } from '../index'
import { TAvatarProps } from '../components/Avatar/types'

const image = {
  src: imageFile,
  alt: 'my image'
}

export default {
  title: 'Avatar',
  component: _Avatar,
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

const Template = (args) => <_Avatar {...args} />

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

// AvatarGroup
const Avatars = [
  {
    initials: 'G M',
    tooltipContent: 'G M'
  },
  {
    imagePath: image.src,
    tooltipContent: 'AVATAR'
  },
  {
    initials: 'T M',
    tooltipContent: 'T M'
  },
  {
    imagePath: image.src
  },
  {
    initials: 'T M'
  },
  {
    imagePath: image.src
  },
  {
    initials: 'T M'
  },
  {
    imagePath: image.src
  },
  {
    imagePath: image.src,
    tooltipContent: 'AVATAR'
  },
  {
    initials: 'T M',
    tooltipContent: 'T M'
  }
] as TAvatarProps

const AvatarGroupTemplate = (args) => {
  return <_AvatarGroup {...args} />
}

export const AvatarGroup = AvatarGroupTemplate.bind({})

AvatarGroup.args = {
  maxCount: 0,
  size: 'medium',
  onAddUser: () => {
    console.log('add user')
  },
  avatarGroup: Avatars
}
