import React, { ReactElement, useEffect, useRef, useState } from 'react'
import {
  useSortBy,
  useTable,
  useRowSelect,
  Column,
  HeaderGroup,
  Row,
  CellValue,
  TableInstance,
  Hooks
} from 'react-table'
import { RenderCell } from './Columns'
import { TTableProps } from './types'
import '../../assets/styles/components/_table.scss'
import { Icon, Text } from '../'
import { calcColumnWidth, calcTableWidth, setSelectedRows } from './utils'

function Table({ columns, data, withSelect = false, onChange }: TTableProps): ReactElement {
  const tableRef = useRef<HTMLTableElement | null>(null)
  const [tableWidth, setTableWidth] = useState(calcTableWidth(window, withSelect))

  const {
    getTableProps,
    getTableBodyProps,
    // selectedFlatRows,
    headerGroups,
    rows,
    prepareRow,
    state
  } = useTable(
    {
      columns: columns as Column[],
      data
      // defaultColumn: {
      //   minWidth: 30,
      //   width: 150,
      //   maxWidth: 400
      // }
    },
    useSortBy,
    // useResizeColumns,
    useRowSelect,
    (hooks: Hooks) => setSelectedRows(hooks, withSelect)
  ) as TableInstance & { selectedFlatRows: Row[] }

  useEffect(() => {
    onChange(state)
  }, [JSON.stringify(state)])

  const handleResize = (e: UIEvent) => {
    const target = e.target as Window
    const width = calcTableWidth(target, withSelect)
    setTableWidth(width)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <table {...getTableProps()} ref={tableRef}>
      <thead>
        {headerGroups.map((headerGroup: HeaderGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: CellValue) => {
              console.log(column, column.width, 'ffff')
              const isSelection = column.id === 'selection'
              return (
                <th
                  {...column.getHeaderProps(
                    column?.columnProps?.sortable ? column.getSortByToggleProps() : undefined
                  )}
                  style={{
                    width: isSelection ? 17 : calcColumnWidth(column.width, tableWidth)
                  }}
                >
                  <Text className="table_header_cell" weight="bold">
                    <>
                      {column.render('Header')}
                      {column.isSorted ? (
                        <Icon
                          size="xsmall"
                          name={column.isSortedDesc ? 'arrow2-down' : 'arrow2-up'}
                        />
                      ) : (
                        ''
                      )}
                    </>
                  </Text>
                </th>
              )
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: Row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell: CellValue) => {
                if (cell?.column.columnProps?.type) {
                  return (
                    <td {...cell.getCellProps()}>
                      <RenderCell cell={cell} />
                    </td>
                  )
                }

                return (
                  <td {...cell.getCellProps()}>
                    <Text>{cell.render('Cell')}</Text>
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
