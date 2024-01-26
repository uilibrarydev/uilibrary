import React from 'react'
import { Link } from '../components/Link'
import '../assets/styles/index.scss'

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
