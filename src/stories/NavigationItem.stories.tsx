import React from 'react'
import { NavigationItem as _NavigationItem } from '../index'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from '../assets/images/logo.svg'

export default {
  title: 'Navigation Item',
  component: _NavigationItem,
  argTypes: {
    showAction: {
      options: ['True', 'False']
    }
  }
}

const Template = (args: any) => <_NavigationItem {...args} As={props => <div>Hello</div>}/>

export const NavigationItem = Template.bind({})

NavigationItem.args = {
  label: <img src={logo} />,
  showAction: false
}
