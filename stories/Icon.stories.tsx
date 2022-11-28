import React from 'react'
import { IconPropTypes } from '../src/components/Icon/types'
import { Icon as IconComp } from '../src/components'

export default {
  title: 'Icon',
  component: IconComp
}

const Template = (args: IconPropTypes): JSX.Element => <IconComp {...args} />

export const Icon = Template.bind({})

Icon.args = {
  title: 'Icon',
  name: 'icon',
  size: 'small',
  color: 'red'
}
