import React from 'react'
import { type StoryFn } from '@storybook/react'

import { FramedIcon as _FramedIcon } from '../index'
import { TButtonIconPropTypes } from '../components/ButtonIcon/types'
import { CodeBlock } from '../helperComponents'
import IconDelete from "../components/SVGIcons/IconDelete";

export default {
  title: 'FramedIcon',
  component: _FramedIcon,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' }
    },
    type: {
      options: ['secondary', 'success', 'danger', 'warning', 'brand', 'information'],
      control: { type: 'radio' }
    }
  }
}


const Template: StoryFn<TButtonIconPropTypes> = (args) => (
  <div>
    <_FramedIcon {...args} />
  </div>
)

export const FramedIcon = Template.bind({})
FramedIcon.args = {
  iconProps: {
    Component: IconDelete
  },
}
