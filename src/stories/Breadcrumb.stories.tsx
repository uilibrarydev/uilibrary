import React, { useState } from 'react'
import { Breadcrumb as _Breadcrumb} from '../index'

export default {
  title: 'Breadcrumb',
  component: _Breadcrumb
}

const Template = (args): JSX.Element | null => {
  const [selectedTab, onTabSelect] = useState(args.selectedValue)
  return <_Breadcrumb {...args} selectedValue={selectedTab} onSelect={onTabSelect} />
}

export const Breadcrumb = Template.bind({})

Breadcrumb.args = {
  breadCrumbItems: [
    {
      label: 'Home',
      value: 1
    },
    {
      label: 'Application',
      value: 2
    },
    {
      label: 'Details',
      value: 3
    }
  ]
}
