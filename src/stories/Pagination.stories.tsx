import React from 'react'
import { Pagination as _Pagination } from '../index'
import IconChevronRight from '../components/SVGIcons/IconChevronRight'
import IconChevronLeft from '../components/SVGIcons/IconChevronLeft'
import IconMore from '../components/SVGIcons/IconMore'
import { StoryFn } from '@storybook/react'
import { TPaginationProps } from '../components/Pagination/types'

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
const Template: StoryFn<TPaginationProps> = ({ pageSize, ...args }) => (
  <_Pagination
    pageSize={10}
    {...args}
    handleChangePage={(item) => {
      console.log(item)
    }}
    totalCount={286}
    classname=""
  />
)

export const Pagination = Template.bind({})

// @ts-ignore
Pagination.args = {
  size: 'large',
  totalCount: 100
  // labels: {
  //   next: <IconChevronRight size={'small'} />,
  //   previous: <IconChevronLeft size={'small'} />
  // },
  // breakLabel: <IconMore size="small" />
}
