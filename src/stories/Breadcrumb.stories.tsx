import React, { useState } from 'react'
import { Breadcrumb as BreadcrumbComp } from '../components'

export default {
  title: 'Breadcrumb',
  component: BreadcrumbComp
}

const Template = (args): JSX.Element | null => {
  const [selectedTab, onTabSelect] = useState(args.selectedValue)
  return <BreadcrumbComp {...args} selectedValue={selectedTab} onSelect={onTabSelect} />
}

export const Breadcrumb = Template.bind({})

Breadcrumb.args = {
  breadrumbItem: [
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
