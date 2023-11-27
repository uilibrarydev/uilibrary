import React from 'react'
import { Icon, Pagination as PaginationComp } from '../components'
export default {
  title: 'Pagination',
  component: PaginationComp,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' }
    }
  }
}
const Template = (args) => (
  <PaginationComp
    {...args}
    handleChangePage={(item) => {
      console.log(item)
    }}
  />
)
export const Pagination = Template.bind({})

Pagination.args = {
  size: 'large',
  totalCount: 100,
  nextLabel: <Icon name="arrow-right" />,
  prevLabel: <Icon name="arrow-left" />,
  breakLabel: <Icon name="more" />
}
