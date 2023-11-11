import React from 'react'
import { Copy as CopyComp } from '../components'

export default {
  title: 'Copy',
  component: CopyComp,
  argTypes: {}
}

const Template = (args) => (
    <CopyComp {...args} />
)

export const Copy = Template.bind({})

Copy.args = {}
