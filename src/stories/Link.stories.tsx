import React from 'react'
import { Link } from '../components/Link'

export default {
  title: 'Link',
  component: Link
}

const Template = (args) => {
  return <Link {...args} />
}

export const LinkPlayground = Template.bind({})
LinkPlayground.args = {
  children: 'Bro',
  url: '/',
  beforeLink: 'Hello',
  afterLink: 'By'
}
