import React, { useState } from 'react'
import { Button, Menu as MenuComp } from '../components'

export default {
  title: 'Menu',
  component: MenuComp,
  argTypes: {
    position: {
      //   options: ['left', 'right'],
      //   control: { type: 'radio' }
    }
  }
}

const items = [
  {
    label: 'edit',
    iconProps: {
      name: 'edit'
    },
    handler: () => {
      console.log('edit')
    },
    value: 1
  },
  {
    label: 'add ',
    iconProps: {
      name: 'add'
    },
    handler: () => {
      console.log('add')
    },
    value: 2
  },
  {
    label: 'delete',
    iconProps: {
      name: 'delete'
    },
    handler: () => {
      console.log('delete')
    },
    value: 3
  }
]

const Template = (args): JSX.Element => {
  const [ref, setRef] = useState<any>(null)

  const [open, setOpen] = useState(false)

  return (
    <div>
      <div style={{ position: 'relative', width: 'fit-content' }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} buttonText="Click me" />
        {open ? <MenuComp {...args} parentRef={ref} menuItems={items} /> : null}
      </div>
    </div>
  )
}

export const Menu = Template.bind({})

Menu.args = {
  menuItems: []
}
