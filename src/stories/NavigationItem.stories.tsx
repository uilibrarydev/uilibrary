import React from 'react'
import { NavigationItem as NavigationItemComp } from '../components'
import logo from '../assets/images/logo.svg'

export default {
  title: 'Navigation Item',
  component: NavigationItemComp,
  argTypes: {
    showAction: {
      options: ['True', 'False']
    }
  }
}

const Template = (args: any) => <NavigationItemComp {...args} />

export const NavigationItem = Template.bind({})

NavigationItem.args = {
  label: <img src={logo} />,
  showAction: false
}
