import React, { ReactElement, useEffect, useMemo, useRef, useState } from 'react'
import {
  useSortBy,
  useTable,
  useRowSelect,
  Column,
  HeaderGroup,
  Row as RowType,
  TableInstance,
  Hooks
} from 'react-table'
import { TColumn, TTableProps } from './types'
import { calcTableWidth, setSelectedRows } from './utils'
import Row from './Row'
import Header from './Header'
import '../../assets/styles/components/_table.scss'

function Table({
  columns,
  data,
  onChange,
  fixedHeader,
  withSelect = false
}: TTableProps): ReactElement {
  const tableRef = useRef<HTMLTableElement | null>(null)
  const [tableWidth, setTableWidth] = useState(calcTableWidth(withSelect, tableRef.current))

  const sortedColumns = useMemo(() => {
    const condition1 = (item: TColumn) => item.fixed === 'left' // Move even numbers to the start
    const condition2 = (item: TColumn) => item.fixed === 'right' // Move numbers greater than 5 to the end

    // Custom sorting function
    columns.sort((a, b) => {
      if (condition1(a) && !condition1(b)) {
        return -1 // Move 'a' to the start
      } else if (!condition1(a) && condition1(b)) {
        return 1 // Move 'b' to the start
      } else if (condition2(a) && !condition2(b)) {
        return 1 // Move 'a' to the end
      } else if (!condition2(a) && condition2(b)) {
        return -1 // Move 'b' to the end
      } else {
        return 0 // Their order doesn't matter
      }
    })

    return [...columns]
  }, [columns])

  const {
    getTableProps,
    getTableBodyProps,
    selectedFlatRows,
    headerGroups,
    rows,
    prepareRow,
    state
  } = useTable(
    {
      columns: sortedColumns as Column[],
      data
    },
    useSortBy,
    useRowSelect,
    (hooks: Hooks) => setSelectedRows(hooks, withSelect)
  ) as TableInstance & { selectedFlatRows: RowType[] }

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
    <div className="table_wrapper" style={{ height: fixedHeader?.y }}>
      <table {...getTableProps()} ref={tableRef}>
        <thead>
          {headerGroups.map((headerGroup: HeaderGroup, i) => (
            <Header
              key={i}
              fixedHeader={Boolean(fixedHeader)}
              headerGroup={headerGroup}
              tableWidth={tableWidth}
            />
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row: RowType) => {
            prepareRow(row)
            return <Row selectedFlatRows={selectedFlatRows} row={row} key={row.id} />
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
