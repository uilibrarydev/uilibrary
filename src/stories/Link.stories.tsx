import React from 'react'
import { Link as LinkComp, Text } from '../components'

export default {
  title: 'Link',
  component: LinkComp
}

const Template = (args) => {
  return (
    <Text size="medium">
      <LinkComp {...args}></LinkComp>
    </Text>
  )
}

export const Link = Template.bind({})

Link.args = {
  children: 'Link text',
  url: '/'
}
