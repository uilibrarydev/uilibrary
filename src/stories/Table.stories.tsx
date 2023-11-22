import React from 'react'
import { Table as TableComponent } from '../components'
import { TColumn, TTableState } from '../components/Table/types'

const data: any[] = [
  {
    user: 'Luke Skywalker',
    age: 21,
    id: 'fffffffsdf',
    visits: [7, 8, 9],
    progress: 'fdfsdfsdfsd',
    status: 'Active'
  },
  ...Array(13).fill({
    user: 'John Doe',
    age: 30,
    id: 'dsfsdf',
    visits: [4, 5, 6],
    progress: 'divv',
    status: 'Active'
  }),
  {
    user: 'John Doe',
    age: 30,
    id: 'dsfsdf',
    visits: [4, 5, 6],
    progress: 'divv',
    status: 'Active'
  },
  {
    user: 'Bruce wayne',
    id: 'fffffffeeeee',
    age: 29,
    visits: [1, 2, 3],
    progress: 'diff',
    status: 'Active'
  }
]

const Template = (args) => {
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

  return <TableComponent {...args} data={data} onChange={handleChange} columns={columns} />
}

export default {
  title: 'Table',
  component: TableComponent
}

export const Table = Template.bind({})

Table.args = {
  fixedHeader: { y: 500 },
  withSelect: true,
  data: [],
  columns: []
}
