import React, { useState } from 'react'
import {Button} from '../components/Button';
import {Menu} from '../components/Menu';

export default {
  title: 'Menu',
  component: Menu,
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
    value: 1,
    meta: 'meta'
  },
  {
    label: 'Save changes',
    iconProps: {
      name: 'add-hover'
    },
    handler: () => {
      console.log('add')
    },
    value: 2
  },
  {
    label: 'Delete',
    iconProps: {
      name: 'close-hover'
    },
    handler: () => {
      console.log('delete')
    },
    value: 3
  }
]

const Template = (args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null)

  const [open, setOpen] = useState(false)

  return (
      <div>
        <div style={{ position: 'relative', width: 'fit-content' }} ref={setRef}>
          <Button onClick={() => setOpen(!open)} iconProps={{ name: 'more' }} />
          <Menu
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

export const MenuPlayground = Template.bind({})

MenuPlayground.args = {
  menuItems: []
}