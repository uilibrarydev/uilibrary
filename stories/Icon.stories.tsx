import React from 'react'
import { IconPropTypes } from '../src/components/Icon/types'
import { Icon } from '../src/components'

export default {
  title: 'Icon',
  component: Icon,
}

export const icon = (args: IconPropTypes): JSX.Element => {
  return <Icon {...args} />
}
