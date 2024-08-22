import React, { ReactElement, useState } from 'react'
import { Tab as _Tab } from '../index'
import IconDismissCircle from '../components/SVGIcons/IconDismissCircle'
import { StoryFn } from '@storybook/react'
import { TTabProps } from '../components/Tab/types'
import IconHome from '../components/SVGIcons/IconHome'

export default {
  title: 'Tab',
  component: _Tab,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' }
    }
  }
}

const Template: StoryFn<TTabProps> = (args) => {
  const [selectedTab, onTabSelect] = useState(args.selectedValue)
  return <_Tab {...args} selectedValue={selectedTab} onSelect={onTabSelect} />
}

export const Tab = Template.bind({})

// @ts-ignore
Tab.args = {
  iconProps: {
    Component: IconHome
  },
  rightIconProps: {
    Component: IconDismissCircle,
    action: (e: string | number) => {
      // eslint-disable-next-line no-console
      console.log(e, 'e')
    }
  },
  size: 'large',
  disabled: false,
  tabItems: [
    {
      label: 'Prompt text 1',
      value: 1,
      badgeProps: {
        text: '9',
        type: 'primary'
      }
    },
    {
      label: 'Prompt text 2',
      value: 2
    },
    {
      label: 'Prompt text 3',
      value: 3
    }
  ]
}
