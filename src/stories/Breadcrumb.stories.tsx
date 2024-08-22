import React, { useState } from 'react'
import { Breadcrumb as _Breadcrumb } from '../index'
import type { StoryFn } from '@storybook/react'
import { TBreadCrumbProps } from '../components/Breadcrumb/types'
import { noop } from '../utils/helpers'

export default {
  title: 'Breadcrumb',
  component: _Breadcrumb
}

const Template: StoryFn<TBreadCrumbProps> = (args) => {
  const [selectedTab, onTabSelect] = useState(args.selectedValue)
  return <_Breadcrumb {...args} selectedValue={selectedTab} onSelect={onTabSelect} />
}

export const Breadcrumb = Template.bind({})

Breadcrumb.args = {
  breadCrumbItems: [
    {
      label: 'Home',
      value: 1,
      onClick: noop,
    },
    {
      label: 'Application',
      value: 2,
      onClick: noop,
    },
    {
      label: 'Details',
      value: 3,
      onClick: noop,
    }
  ]
}
