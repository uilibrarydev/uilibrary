import React from 'react'
import { Link as _Link } from '../index'

export default {
  title: 'Link',
  component: _Link
}

const Template = (args) => {
  return <_Link {...args} />
}

export const Link = Template.bind({})
Link.args = {
  children: 'Bro',
  url: '/',
  beforeLink: 'Hello',
  afterLink: 'By'
}
