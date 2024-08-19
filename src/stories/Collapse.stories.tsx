import React, { useState } from 'react'
import { CollapseItem as _CollapseItem, CollapseGroup as _CollapseGroup } from '../index'
import IconChevronDown from "../components/SVGIcons/IconChevronDown";

export default {
  title: 'Collapse',
  component: _CollapseItem,
  argTypes: {}
}

const Template = (args: any) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <_CollapseItem
      {...args}
        reverse={true}
      title={{ text: args.title }}
      isOpen={isOpen}
      toggle={isOpen ? close : open}
      additionalInfo={<div>COMPONENT</div>}
    >
      <div>My Accordion content</div>
    </_CollapseItem>
  )
}

export const CollapseItem = Template.bind({})

CollapseItem.args = {
  title: 'Collapse'
}

const CollapseItems = [
  {
    title: 'collapse1',
    value: 1,
    content: <div>collapse1 content</div>,
    isOpen: true,
    id: 1
  },
  {
    title: 'collapse2',
    value: 2,
    content: <div style={{ height: 100 }}>collapse2 content</div>,
    isOpen: false
  },
  {
    title: 'collapse3',
    value: 3,
    content: <div style={{ height: 200 }}>collapse3 content</div>,
    isOpen: true,
    id: 3
  }
]

const Template1 = (args: any) => {
  return <_CollapseGroup {...args} items={CollapseItems} titleColor="selected" />
}

export const CollapseGroup = Template1.bind({})

CollapseGroup.args = {}
