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

const Template = (args) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null)

  const [open, setOpen] = useState(false)

  return (
    <div>
      <div style={{ position: 'relative', width: 'fit-content' }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{ name: 'more' }} />
        <MenuComp
          {...args}
          onClose={() => setOpen(false)}
          parentRef={ref}
          menuItems={items}
          isOpen={open}
        />
      </div>
    </div>
  )
}

export const Menu = Template.bind({})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Menu.args = {
  menuItems: []
}
