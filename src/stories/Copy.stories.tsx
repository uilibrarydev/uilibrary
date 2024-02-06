import React from 'react'
import { Copy as _Copy } from '../index'

export default {
  title: 'Copy',
  component: _Copy,
  argTypes: {}
}

const Template = (args) => <_Copy {...args} />

export const Copy = Template.bind({})

Copy.args = {
  textAfterCopy: 'Copied'
}