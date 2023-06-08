import React, { useRef, useState } from 'react'
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
    label: 'some text',
    icon: null,
    handler: () => {
      console.log('klslks')
    }
  },
  {
    label: 'some text - 2',
    icon: null,
    handler: () => {
      console.log('klslks')
    }
  },
  {
    label: 'some text-3',
    icon: null,
    handler: () => {
      console.log('klslks')
    }
  }
]

const Template = (args): JSX.Element => {
  const [ref, setRef] = useState<any>(null)

  const [open, setOpen] = useState(false)

  return (
    <div>
      <div style={{ position: 'relative', width: '100px' }} ref={setRef}>
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
