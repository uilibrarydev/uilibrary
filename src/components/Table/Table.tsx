import React from 'react'
import { useSortBy, useTable } from 'react-table'

function Table({ columns, data }: any) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data
    },
    useSortBy
  )

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 20)

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup: any, i: number) => (
          <tr key={i} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any, i: number) => (
              // Add the sorting props to control sorting. For this example
              // we can add them into the header props
              <th key={i} {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                {/* Add a sort direction indicator */}
                <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {firstPageRows.map((row: any, i: number) => {
          prepareRow(row)
          console.log(row)
          return (
            <tr {...row.getRowProps()} key={i}>
              {row.cells.map((cell: any, i: number) => {
                console.log(cell.render('Cell'), cell)
                if (cell.column.type === 'status') {
                  return (
                    <td key={i}>
                      {cell.value[0]}/{cell.value[1]}
                    </td>
                  )
                }

                return (
                  <td key={i} {...cell.getCellProps()}>
                    {cell.value}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
