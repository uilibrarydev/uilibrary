import React from 'react'
import { Table as _Table } from '../index'
import { TColumn, TTableProps, TTableState } from '../components/Table/types'
import { StoryFn } from '@storybook/react'
import IconArrowSort from '../components/SVGIcons/IconArrowSort'

const data: any[] = [
  // {
  //   user: 'Luke Skywalker',
  //   age: 21,
  //   id: 'fffffffsdf',
  //   visits: [7, 8, 9],
  //   progress: 'fdfsdfsdfsd',
  //   status: 'Active'
  // },
  // ...Array(13).fill({
  //   user: 'John Doe',
  //   age: 30,
  //   id: 'dsfsdf',
  //   visits: [4, 5, 6],
  //   progress: 'divv',
  //   status: 'Active'
  // }),
  // {
  //   user: 'John Doe',
  //   age: 30,
  //   id: 'dsfsdf',
  //   visits: [4, 5, 6],
  //   progress: 'divv',
  //   status: 'Active'
  // },
  // {
  //   user: 'Bruce wayne',
  //   id: 'fffffffeeeee',
  //   age: 29,
  //   visits: [1, 2, 3],
  //   progress: 'diff',
  //   status: 'Active'
  // }
]

const Template: StoryFn<TTableProps> = (args) => {
  const columns: TColumn[] = [
    {
      Header: 'User',
      accessor: 'user',
      fixed: 'left',
      widthInPercent: 30,
      width: 100
    },
    {
      Header: 'Status',
      accessor: 'status',
      widthInPercent: 20
    },
    {
      accessor: 'age',
      Header: 'Age',
      widthInPercent: 20,
      minWidth: 100,
      columnProps: {
        sortable: true
      }
    },
    {
      Header: 'Profile Progress',
      accessor: 'progress',
      widthInPercent: 20
    },
    {
      Header: 'Visits',
      widthInPercent: 10,
      accessor: 'visits',
      fixed: 'right'
    }
  ]

  const handleChange = (state: TTableState) => {
    console.log(state)
  }

  return (
    <div style={{ height: '95vh' }}>
      <_Table {...args} data={data} onChange={handleChange} columns={columns} />
    </div>
  )
}

export default {
  title: 'Table',
  component: _Table
}

export const Table = Template.bind({})

Table.args = {
  fixedHeader: true,
  withSelect: true,
  data: [],
  columns: [],
  sortIconProps: {
    Component: IconArrowSort,
    size: 'small'
  }
}
