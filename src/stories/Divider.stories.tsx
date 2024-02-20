import React from 'react'
import { Meta } from '@storybook/react'
import { Divider as _Divider } from '../index'

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

const Template = (args) => {
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
