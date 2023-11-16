import React from 'react'
import { Table as TableComponent } from '../components'
import { EColumns, TColumn, TTableState } from '../components/Table/types'

const data = [
  {
    user: ['John Doe', 'john_doe@gmail.com'],
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: ['some cell', 'Badge text one'],
    progress: ['This is my progress', 30],
    status: [
      'Figma',
      'https://www.figma.com/file/iHlCU0TgXgtXWHTpUDscLJ/ADS-Components?node-id=4333%3A14425&mode=dev'
    ]
  },
  {
    user: ['John Doess', 'johnss_doe@gmail.com'],
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: ['some cell', 'Badge text second'],
    progress: ['This is my progress', 50],
    status: [
      'Figma',
      'https://www.figma.com/file/iHlCU0TgXgtXWHTpUDscLJ/ADS-Components?node-id=4333%3A14425&mode=dev'
    ]
  },
  {
    user: ['John Doerr', 'johnrr_doe@gmail.com'],
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: ['some cell', 'Whats up?'],
    progress: ['This is my progress', 40],
    status: [
      'Figma',
      'https://www.figma.com/file/iHlCU0TgXgtXWHTpUDscLJ/ADS-Components?node-id=4333%3A14425&mode=dev'
    ]
  },
  {
    user: ['John Doerr', 'johnrr_doe@gmail.com'],
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: ['some cell', 'Whats up?'],
    progress: ['This is my progress', 40],
    status: [
      'Figma',
      'https://www.figma.com/file/iHlCU0TgXgtXWHTpUDscLJ/ADS-Components?node-id=4333%3A14425&mode=dev'
    ]
  },
  {
    user: ['John Doerr', 'johnrr_doe@gmail.com'],
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: ['some cell', 'Whats up?'],
    progress: ['This is my progress', 40],
    status: [
      'Figma',
      'https://www.figma.com/file/iHlCU0TgXgtXWHTpUDscLJ/ADS-Components?node-id=4333%3A14425&mode=dev'
    ]
  },
  {
    user: ['John Doerr', 'johnrr_doe@gmail.com'],
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: ['some cell', 'Whats up?'],
    progress: ['This is my progress', 40],
    status: [
      'Figma',
      'https://www.figma.com/file/iHlCU0TgXgtXWHTpUDscLJ/ADS-Components?node-id=4333%3A14425&mode=dev'
    ]
  },
  {
    user: ['John Doerr', 'johnrr_doe@gmail.com'],
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: ['some cell', 'Whats up?'],
    progress: ['This is my progress', 40],
    status: [
      'Figma',
      'https://www.figma.com/file/iHlCU0TgXgtXWHTpUDscLJ/ADS-Components?node-id=4333%3A14425&mode=dev'
    ]
  },
  {
    user: ['John Doerr', 'johnrr_doe@gmail.com'],
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: ['some cell', 'Whats up?'],
    progress: ['This is my progress', 40],
    status: [
      'Figma',
      'https://www.figma.com/file/iHlCU0TgXgtXWHTpUDscLJ/ADS-Components?node-id=4333%3A14425&mode=dev'
    ]
  },
  {
    user: ['John Doerr', 'johnrr_doe@gmail.com'],
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: ['some cell', 'Whats up?'],
    progress: ['This is my progress', 40],
    status: [
      'Figma',
      'https://www.figma.com/file/iHlCU0TgXgtXWHTpUDscLJ/ADS-Components?node-id=4333%3A14425&mode=dev'
    ]
  },
  {
    user: ['John Doerr', 'johnrr_doe@gmail.com'],
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: ['some cell', 'Whats up?'],
    progress: ['This is my progress', 40],
    status: [
      'Figma',
      'https://www.figma.com/file/iHlCU0TgXgtXWHTpUDscLJ/ADS-Components?node-id=4333%3A14425&mode=dev'
    ]
  },
  {
    user: ['John Doerr', 'johnrr_doe@gmail.com'],
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: ['some cell', 'Whats up?'],
    progress: ['This is my progress', 40],
    status: [
      'Figma',
      'https://www.figma.com/file/iHlCU0TgXgtXWHTpUDscLJ/ADS-Components?node-id=4333%3A14425&mode=dev'
    ]
  },
  {
    user: ['John Doerr', 'johnrr_doe@gmail.com'],
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: ['some cell', 'Whats up?'],
    progress: ['This is my progress', 40],
    status: [
      'Figma',
      'https://www.figma.com/file/iHlCU0TgXgtXWHTpUDscLJ/ADS-Components?node-id=4333%3A14425&mode=dev'
    ]
  },
  {
    user: ['John Doerr', 'johnrr_doe@gmail.com'],
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: ['some cell', 'Whats up?'],
    progress: ['This is my progress', 40],
    status: [
      'Figma',
      'https://www.figma.com/file/iHlCU0TgXgtXWHTpUDscLJ/ADS-Components?node-id=4333%3A14425&mode=dev'
    ]
  },
  {
    user: ['John Doerr', 'johnrr_doe@gmail.com'],
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: ['some cell', 'Whats up?'],
    progress: ['This is my progress', 40],
    status: [
      'Figma',
      'https://www.figma.com/file/iHlCU0TgXgtXWHTpUDscLJ/ADS-Components?node-id=4333%3A14425&mode=dev'
    ]
  },
  {
    user: ['John Doerr', 'johnrr_doe@gmail.com'],
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: ['some cell', 'Whats up?'],
    progress: ['This is my progress', 40],
    status: [
      'Figma',
      'https://www.figma.com/file/iHlCU0TgXgtXWHTpUDscLJ/ADS-Components?node-id=4333%3A14425&mode=dev'
    ]
  },
  {
    user: ['John Doerr', 'johnrr_doe@gmail.com'],
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: ['some cell', 'Whats up?'],
    progress: ['This is my progress', 40],
    status: [
      'Figma',
      'https://www.figma.com/file/iHlCU0TgXgtXWHTpUDscLJ/ADS-Components?node-id=4333%3A14425&mode=dev'
    ]
  },
  {
    user: ['John Doerr', 'johnrr_doe@gmail.com'],
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    age: 29,
    id: 'fffffff',
    visits: ['some cell', 'Whats up?'],
    progress: ['This is my progress', 40],
    status: [
      'Figma',
      'https://www.figma.com/file/iHlCU0TgXgtXWHTpUDscLJ/ADS-Components?node-id=4333%3A14425&mode=dev'
    ]
  },
  {
    user: ['Bruce Wayne', 'bruce_wayn@gmail.com'],
    lastName: 'dsfkbdwkhsdkhsdkjfh',
    id: 'fffffffeeeee',
    age: 29,
    visits: ['new cell', 'Badge text'],
    progress: ['Some progress', 76],
    status: [
      'Figma',
      'https://www.figma.com/file/iHlCU0TgXgtXWHTpUDscLJ/ADS-Components?node-id=4333%3A14425&mode=dev'
    ]
  }
]

const Template = (args) => {
  const columns: TColumn[] = [
    {
      Header: 'User',
      accessor: 'user',
      columnProps: {
        type: EColumns.USER
      },
      fixed: 'left',
      widthInPercent: 30,
      width: 100
    },
    {
      Header: 'Visits',
      accessor: 'visits',
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
      Header: 'Status',
      accessor: 'status',
      widthInPercent: 20,
      columnProps: {
        type: EColumns.LINK
      }
    },
    {
      Header: 'Age',
      accessor: 'age',
      widthInPercent: 20,
      columnProps: {
        sortable: true
      }
    },
    {
      Header: 'Last name',
      accessor: 'lastName',
      widthInPercent: 20
    },
    {
      Header: 'Profile Progress',
      accessor: 'progress',
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
      fixedHeader
    />
  )
}

export default {
  title: 'Table',
  component: TableComponent
}

export const Table = Template.bind({})

Table.args = {}
