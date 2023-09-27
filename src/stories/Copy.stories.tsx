import React from 'react'
import { Copy as CopyComp } from '../components'

export default {
  title: 'Copy',
  component: CopyComp,
  argTypes: {}
}

const Template = (args) => (
  <div style={{ width: 20 }}>
    <CopyComp {...args} />
  </div>
)

export const Copy = Template.bind({})

Copy.args = {}
