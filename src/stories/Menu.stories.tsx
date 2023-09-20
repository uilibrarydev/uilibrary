import React, { useState } from 'react'
import { Button, Menu as MenuComp } from '../components'

export default {
  title: 'Menu',
  component: MenuComp,
  argTypes: {
    position: {
      type: ['left', 'right', 'bottom'],
      control: { type: 'radio' }
    }
  }
}

const items = [
  {
    label: 'Edit',
    iconProps: {
      name: 'edit'
    },
    handler: () => {
      console.log('edit')
    },
    value: 1
  },
  {
    label: 'Save changes',
    iconProps: {
      name: 'add'
    },
    handler: () => {
      console.log('add')
    },
    value: 2
  },
  {
    label: 'Delete',
    iconProps: {
      name: 'close'
    },
    handler: () => {
      console.log('delete')
    },
    value: 3
  }
]

const Template = (args): JSX.Element => {
  const [ref, setRef] = useState<HTMLDivElement>(null)

  const [open, setOpen] = useState(false)

  return (
    <div>
      <div style={{ position: 'relative', width: 'fit-content' }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{ name: 'more' }} />
        {open ? (
          <MenuComp {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} />
        ) : null}
      </div>
    </div>
  )
}

export const Menu = Template.bind({})

Menu.args = {
  menuItems: []
}
