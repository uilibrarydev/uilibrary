import React from 'react'
import { Link as LinkComp, Text } from '../components'

export default {
  title: 'Link',
  component: LinkComp
}

const Template = (args: any) => {
  return (
    <Text size="medium">
      <LinkComp {...args}></LinkComp>
    </Text>
  )
}

export const Link = Template.bind({})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Link.args = {
  children: 'Bro',
  url: '/',
  beforeLink: 'Hello',
  afterLink: 'By',
  dataId: 'dasdasa'
}
