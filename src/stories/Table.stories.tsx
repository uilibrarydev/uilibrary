import React from 'react'
import { Table as TableComponent } from '../components'
import { EColumns, TColumn, TTableState } from '../components/Table/types'
import { RenderCell } from '../components/Table/Columns'

const data: any[] = [
  {
    user: { firstName: 'John', lastName: 'Doe', email: 'john_doe@gmail.com' },
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: 'some cell',
    progress: 'This is my progress',
    status: 'Figma'
  },
  {
    user: { firstName: 'John', lastName: 'Doe', email: 'john_doe@gmail.com' },
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: 'some cell',
    progress: 'This is my progress',
    status: 'Figma'
  },
  {
    user: { firstName: 'John', lastName: 'Doe', email: 'john_doe@gmail.com' },
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: 'some cell',
    progress: 'This is my progress',
    status: 'Figma'
  },
  {
    user: { firstName: 'John', lastName: 'Doe', email: 'john_doe@gmail.com' },
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: 'some cell',
    progress: 'This is my progress',
    status: 'Figma'
  },
  {
    user: { firstName: 'John', lastName: 'Doe', email: 'john_doe@gmail.com' },
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: 'some cell',
    progress: 'This is my progress',
    status: 'Figma'
  },
  {
    user: { firstName: 'John', lastName: 'Doe', email: 'john_doe@gmail.com' },
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: 'some cell',
    progress: 'This is my progress',
    status: 'Figma'
  },
  {
    user: { firstName: 'John', lastName: 'Doe', email: 'john_doe@gmail.com' },
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: 'some cell',
    progress: 'This is my progress',
    status: 'Figma'
  },
  {
    user: { firstName: 'John', lastName: 'Doe', email: 'john_doe@gmail.com' },
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: 'some cell',
    progress: 'This is my progress',
    status: 'Figma'
  },
  {
    user: { firstName: 'John', lastName: 'Doe', email: 'john_doe@gmail.com' },
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: 'some cell',
    progress: 'This is my progress',
    status: 'Figma'
  },
  {
    user: { firstName: 'John', lastName: 'Doe', email: 'john_doe@gmail.com' },
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: 'some cell',
    progress: 'This is my progress',
    status: 'Figma'
  },
  {
    user: { firstName: 'John', lastName: 'Doe', email: 'john_doe@gmail.com' },
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: 'some cell',
    progress: 'This is my progress',
    status: 'Figma'
  },
  {
    user: { firstName: 'John', lastName: 'Doe', email: 'john_doe@gmail.com' },
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: 'some cell',
    progress: 'This is my progress',
    status: 'Figma'
  },
  {
    user: { firstName: 'John', lastName: 'Doe', email: 'john_doe@gmail.com' },
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: 'some cell',
    progress: 'This is my progress',
    status: 'Figma'
  },
  {
    user: { firstName: 'John', lastName: 'Doe', email: 'john_doe@gmail.com' },
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: 'some cell',
    progress: 'This is my progress',
    status: 'Figma'
  },
  {
    user: { firstName: 'John', lastName: 'Doe', email: 'john_doe@gmail.com' },
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: 'some cell',
    progress: 'This is my progress',
    status: 'Figma'
  },
  {
    user: { firstName: 'John', lastName: 'Doe', email: 'john_doe@gmail.com' },
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: 'some cell',
    progress: 'This is my progress',
    status: 'Figma'
  },
  {
    user: { firstName: 'Bruce', lastName: 'Wayne', email: 'john_doe@gmail.com' },
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    id: 'fffffffeeeee',
    age: 29,
    visits: 'new cell',
    progress: 'Some progress',
    status: 'Figma'
  }
]

const Template = (args) => {
  const columns: TColumn[] = [
    {
      Header: 'Visits',
      accessor: function (row: any) {
        return <RenderCell data={row.visits} column={this} />
      },
      columnProps: {
        type: EColumns.BADGE,
        showText: true,
        textRight: true,
        sortable: true
      },
      widthInPercent: 30,
      minWidth: 220
    },
    {
      Header: 'User',
      accessor: function (row: any) {
        return <RenderCell data={row.user} column={this} />
      },
      columnProps: {
        type: EColumns.USER,
        iconProps: {
          leftIcon: 'copy',
          rightIcon: 'arrow-download',
          leftIconAction: (row) => console.log(row),
          rightIconAction: (row) => console.log(row)
        }
      },
      fixed: 'left',
      widthInPercent: 30,
      width: 100
    },
    {
      Header: 'Status',
      accessor: function (row: any) {
        return <RenderCell data={row.status} column={this} />
      },
      widthInPercent: 20,
      columnProps: {
        type: EColumns.LINK,
        iconProps: {
          leftIcon: 'copy',
          rightIcon: 'edit',
          leftIconAction: (row) => console.log(row),
          rightIconAction: (row) => console.log(row)
        }
      }
    },
    {
      accessor: function (row: any) {
        return <RenderCell data={row.age} column={this} />
      },
      Header: 'Age',
      widthInPercent: 20,
      columnProps: {
        sortable: true,
        type: EColumns.LINK,

        iconProps: {
          rightIcon: 'attach',
          rightIconAction: (row) => console.log(row)
        }
      }
    },
    {
      Header: 'Last name',
      accessor: function (row: any) {
        return <RenderCell data={row.lastName} column={this} />
      },
      widthInPercent: 20,
      fixed: 'right',
      columnProps: {
        type: EColumns.LINK
      }
    },
    {
      Header: 'Profile Progress',
      accessor: function (row: any) {
        return <RenderCell data={row.progress} column={this} />
      },
      widthInPercent: 20,
      columnProps: {
        type: EColumns.PROGRESS
      }
    }
  ]

  const handleChange = (state: TTableState) => {
    console.log(state)
  }

  return (
    <TableComponent
      {...args}
      data={data}
      onChange={handleChange}
      columns={columns}
      withSelect
      fixedHeader={{ y: 500 }}
    />
  )
}

export default {
  title: 'Table',
  component: TableComponent
}

export const Table = Template.bind({})

Table.args = {}
