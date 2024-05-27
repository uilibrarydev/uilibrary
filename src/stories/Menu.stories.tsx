import React, { useState } from 'react'
import {
  Menu as _Menu,
  Button,
  IconArrowExit,
  IconCheckmark,
  IconSettings,
  IconPeople,
  NestedMenu as _NestedMenu,
  IconBeach
} from '../index'

export default {
  title: 'Menu',
  component: _Menu,
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
      Component: IconCheckmark,
      type: 'selected'
    },
    handler: () => {
      console.log('delete')
    },
    value: 3
  },
  {
    label: 'logout',
    value: 1,
    iconProps: {
      Component: IconArrowExit,
      type: 'selected'
    },
    handler: () => {}
  }
]

const Template = (args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null)

  const [open, setOpen] = useState(false)

  return (
    <div>
      <div style={{ position: 'relative', width: 'fit-content' }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{ name: 'more' }} />
        <_Menu
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

Menu.args = {
  menuItems: []
}

const NestedItems = [
  {
    title: 'People',
    value: 1,
    iconProps: {
      Component: IconPeople,
      size: 'medium'
    },
    isOpen: true,
    subItems: [
      {
        label: 'Libraries',
        value: 1,
        iconProps: {
          Component: IconSettings,
          size: 'medium'
        },
        handler: () => {
          console.log('libraries')
        },
        disabled: true
      },
      {
        label: 'Users and permissions',
        value: 2,
        iconProps: {
          Component: IconSettings,
          size: 'medium'
        },
        handler: () => {
          console.log('libraries')
        }
      }
    ]
  },
  {
    title: 'Attendance and absence management',
    value: 2,
    iconProps: {
      Component: IconBeach
    },
    subItems: [
      {
        label: 'Libraries',
        value: 1,
        iconProps: {
          Component: IconSettings,
          size: 'medium'
        },
        handler: () => {
          console.log('libraries')
        }
      }
    ]
  }
]

const NestedMenuTemplate = (args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div style={{ position: 'relative', width: 'fit-content' }} ref={setRef}>
        <Button
          onClick={() => setOpen(!open)}
          iconProps={{ Component: IconSettings }}
          type="tertiary"
        />
        <_NestedMenu
          {...args}
          onClose={() => setOpen(false)}
          parentRef={ref}
          menuItems={NestedItems}
          isOpen={open}
          position="bottom-left"
        />
      </div>
    </div>
  )
}

export const NestedMenu = NestedMenuTemplate.bind({})
