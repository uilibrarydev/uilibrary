import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Text } from '../src/components'
import { TextPropTypes } from '../src/components/Text/types'

export default {
  title: 'Text',
  component: Text,
} as Meta

export const text = (args: TextPropTypes): JSX.Element => {
  return <Text {...args} />
}
