import React from 'react'
import { Icon, Pagination as _Pagination } from '../index'
import IconChevronRight from '../components/SVGIcons/IconChevronRight'
import IconChevronLeft from '../components/SVGIcons/IconChevronLeft'

export default {
  title: 'Pagination',
  component: _Pagination,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' }
    }
  }
}
const Template = (args) => (
  <_Pagination
    pageSize={10}
    {...args}
    handleChangePage={(item) => {
      console.log(item)
    }}
    totalCount={286}
    breakLabel={<Icon name="more" />}
    classname=""
  />
)

export const Pagination = Template.bind({})

Pagination.args = {
  size: 'large',
  totalCount: 100,
  labels: {
    next: <IconChevronRight size={'small'} />,
    previous: <IconChevronLeft size={'small'} />
  },
  breakLabel: <Icon name="more" />
}
