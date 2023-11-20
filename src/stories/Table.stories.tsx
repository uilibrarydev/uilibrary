import React from 'react'
import { Table as TableComponent } from '../components'
import { EColumns, TColumn, TTableState } from '../components/Table/types'

const data: any[] = [
  {
    user: { firstName: 'Johny', lastName: 'Does', email: 'johny_does@gmail.com' },
    age: 29,
    id: 'fffffff',
    visits: 'some cell',
    progress: {
      label: 'This is my progress',
      value: 20
    },
    status: 'Figma'
  },
  {
    user: { firstName: 'John', lastName: 'Doe', email: 'john_doe@gmail.com' },
    age: 29,
    id: 'fffffff',
    visits: 'some cell',
    progress: {
      label: 'This is my progress',
      value: 60
    },
    status: 'Figma'
  },
  {
    user: { firstName: 'Bruce', lastName: 'Wayne', email: 'john_doe@gmail.com' },
    id: 'fffffffeeeee',
    age: 29,
    visits: 'new cell',
    progress: {
      label: 'Diff progress',
      value: 240
    },
    status: 'Figma'
  }
]

const Template = (args) => {
  const columns: TColumn[] = [
    // {
    //   Header: 'Visits',
    //   accessor: 'visits',
    //   columnProps: {
    //     type: EColumns.BADGE,
    //     showText: true,
    //     textRight: true,
    //     sortable: true
    //   },
    //   widthInPercent: 30,
    //   minWidth: 220
    // },
    {
      Header: 'User',
      accessor: 'user',
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
      accessor: 'status',
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
      accessor: 'age',
      Header: 'Age',
      widthInPercent: 20,
      columnProps: {
        sortable: true,
        type: EColumns.LINK,
        textRight: true,
        iconProps: {
          rightIcon: 'attach',
          rightIconAction: (row) => console.log(row)
        }
      }
    },
    {
      Header: 'Profile Progress',
      accessor: 'progress',
      widthInPercent: 20,
      columnProps: {
        type: EColumns.PROGRESS,
        showText: true
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
      // fixedHeader={{ y: 500 }}
    />
  )
}

export default {
  title: 'Table',
  component: TableComponent
}

export const Table = Template.bind({})

Table.args = {}
