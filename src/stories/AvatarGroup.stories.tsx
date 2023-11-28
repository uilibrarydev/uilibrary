import React from 'react'
import { AvatarGroup as AvatarGroupComp } from '../components'
import { TAvatarProps } from '../components/Avatar/types'
import imageFile from '../assets/images/avatar.jpg'

const image = {
  src: imageFile,
  alt: 'my image'
}

export default {
  title: 'AvatarGroup',
  component: AvatarGroupComp,
  argTypes: {
    size: {
      options: ['xlarge', 'large', 'medium', 'small', 'xsmall', 'xxsmall'],
      control: { type: 'radio' }
    },
    onAddUser: {
      options: [false, true],
      control: { type: 'radio' }
    }
  }
}

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
  }
] as TAvatarProps

const Template = (args) => {
  return <AvatarGroupComp {...args} />
}

export const AvatarGroup = Template.bind({})

AvatarGroup.args = {
  avatarGroup: Avatars,
  size: 'medium',
  onAddUser: () => {
    console.log('add user')
  }
}
