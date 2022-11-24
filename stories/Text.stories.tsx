import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import Text from '../src/components'

export default {
  title: 'Text',
  component: Text,
} as Meta

export const text = (args) => {
  return <Text {...args} />
}
