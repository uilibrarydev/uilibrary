import React, { useState } from 'react'
import { CollapseItem as CollapseComp, CollapseGroup as CollapseGroupComp } from '../components'

export default {
  title: 'Collapse',
  component: CollapseComp,
  argTypes: {}
}

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <CollapseComp {...args} isOpen={isOpen} toggle={isOpen ? close : open}>
      <div>My Accordion content</div>
    </CollapseComp>
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
    content: <div>collapse1 content</div>
  },
  {
    title: 'collapse2',
    value: 2,
    content: <div style={{ height: 100 }}>collapse2 content</div>
  },
  {
    title: 'collapse3',
    value: 3,
    content: <div style={{ height: 200 }}>collapse3 content</div>
  }
]

const Template1 = (args) => {
  return <CollapseGroupComp {...args} items={CollapseItems} titleColor="selected" />
}

export const CollapseGroup = Template1.bind({})

CollapseGroup.args = {}
