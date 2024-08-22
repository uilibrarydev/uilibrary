import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Divider as _Divider } from '../index'
import { TDividerProps } from '../components/Divider/types'

export default {
  title: 'Divider',
  component: _Divider,
  argTypes: {
    type: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  }
} as Meta

const Template: StoryFn<TDividerProps> = (args) => {
  return (
    <div style={{ height: '300px', width: '300px' }}>
      <_Divider {...args} />
    </div>
  )
}

export const Divider = Template.bind({})

Divider.args = {
  type: 'primary',
  isHorizontal: true
}
