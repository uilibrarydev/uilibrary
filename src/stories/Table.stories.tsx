import React from 'react'
import { Table as TableComponent } from '../components'

const data = [
  {
    firstName: 'snhsdkfhsdkfhsdf',
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    visits: 23,
    progress: 39,
    status: ['red', 'text']
  },
  {
    firstName: 'snhsdkfhsdkfhsdf',
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    visits: 82,
    progress: 76,
    status: ['red', 'text']
  },
  {
    firstName: 'snhsdkfhsdkfhsdf',
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 19,
    visits: 80,
    progress: 81,
    status: ['red', 'text']
  },
  {
    firstName: 'snhsdkfhsdkfhsdf',
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 26,
    visits: 71,
    progress: 13,
    status: ['red', 'text']
  },
  {
    firstName: 'snhsdkfhsdkfhsdf',
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 17,
    visits: 78,
    progress: 9,
    status: ['red', 'text']
  },
  {
    firstName: 'snhsdkfhsdkfhsdf',
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 10,
    visits: 21,
    progress: 37,
    status: ['red', 'text']
  },
  {
    firstName: 'snhsdkfhsdkfhsdf',
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 4,
    visits: 26,
    progress: 72,
    status: ['red', 'text']
  },
  {
    firstName: 'snhsdkfhsdkfhsdf',
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 2,
    visits: 59,
    progress: 66,
    status: ['red', 'text']
  },
  {
    firstName: 'snhsdkfhsdkfhsdf',
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 4,
    visits: 74,
    progress: 52,
    status: ['red', 'text']
  },
  {
    firstName: 'snhsdkfhsdkfhsdf',
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 28,
    visits: 76,
    progress: 27,
    status: ['red', 'text']
  }
]
export default {
  title: 'Table',
  component: TableComponent
}

const Template = (args) => {
  const columns = [
    {
      Header: 'Age',
      accessor: 'age',
      type: 'tadam'
    },
    {
      Header: 'Visits',
      accessor: 'visits',
      type: 'tadam1'
    },
    {
      Header: 'Status',
      accessor: 'status',
      type: 'status'
    },
    {
      Header: 'Profile Progress',
      accessor: 'progress',
      type: 'tadam2'
    }
  ]

  return <TableComponent {...args} data={data} columns={columns} />
}

export const Table = Template.bind({})

Table.args = {}
