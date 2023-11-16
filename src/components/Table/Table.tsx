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
import { calcColumnWidth, calcTableWidth, CHECKBOX_HEADER_ID, setSelectedRows } from './utils'
import classNames from 'classnames'

function Table({
  columns,
  data,
  onChange,
  fixedHeader = false,
  withSelect = false
}: TTableProps): ReactElement {
  const tableRef = useRef<HTMLTableElement | null>(null)
  const [tableWidth, setTableWidth] = useState(calcTableWidth(withSelect, tableRef.current))
  const sortedColumns = columns.sort((a, b) => Number(Boolean(b.fixed)) - Number(Boolean(a.fixed)))
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state } = useTable(
    {
      columns: sortedColumns as Column[],
      data
    },
    useSortBy,
    useRowSelect,
    (hooks: Hooks) => setSelectedRows(hooks, withSelect)
  ) as TableInstance & { selectedFlatRows: Row[] }

  useEffect(() => {
    onChange(state)
  }, [JSON.stringify(state)])

  const handleResize = () => {
    if (tableRef.current) {
      const width = calcTableWidth(withSelect, tableRef.current)
      setTableWidth(width)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    setTableWidth(calcTableWidth(withSelect, tableRef.current))

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [tableRef.current])

  return (
    <div className="table_wrapper">
      <table {...getTableProps()} ref={tableRef}>
        <thead>
          {headerGroups.map((headerGroup: HeaderGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className={classNames({ fix_header: fixedHeader })}
            >
              {headerGroup.headers.map((column: CellValue, i: number, arr: CellValue[]) => {
                const isSelection = column.id === CHECKBOX_HEADER_ID
                return (
                  <th
                    {...column.getHeaderProps(
                      column?.columnProps?.sortable ? column.getSortByToggleProps() : undefined
                    )}
                    className={classNames({
                      fixed_column_left: column?.fixed === 'left',
                      fixed_column_right: column?.fixed === 'right',
                      fixed_checkbox_header:
                        column?.id === CHECKBOX_HEADER_ID && arr[i + 1]?.fixed === 'left'
                    })}
                    style={{
                      width: isSelection ? 17 : calcColumnWidth(column.widthInPercent, tableWidth),
                      ...(!isSelection && column.minWidth ? { minWidth: column.minWidth } : {}),
                      ...(!isSelection && column.maxWidth ? { maxWidth: column.maxWidth } : {}),
                      ...(!isSelection && column.width ? { width: column.width } : {})
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
                {row.cells.map((cell: CellValue, i, arr: CellValue[]) => {
                  console.log(i, 'araaaa', arr)
                  if (cell?.column.columnProps?.type) {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className={classNames({
                          fixed_column_left: cell?.column?.fixed === 'left',
                          fixed_column_right: cell?.column?.fixed === 'right'
                        })}
                      >
                        <RenderCell cell={cell} />
                      </td>
                    )
                  }

                  return (
                    <td
                      {...cell.getCellProps()}
                      className={classNames({
                        fixed_column_right: cell?.column?.fixed === 'right',
                        fixed_checkbox:
                          cell?.column.id === CHECKBOX_HEADER_ID &&
                          arr[i + 1].column?.fixed === 'left'
                      })}
                    >
                      <Text>{cell.render('Cell')}</Text>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
