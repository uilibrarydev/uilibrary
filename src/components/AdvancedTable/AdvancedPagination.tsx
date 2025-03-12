import React from 'react'
import IconChevronLeft from '../SVGIcons/IconChevronLeft'
import IconChevronRight from '../SVGIcons/IconChevronRight'
import type { Table } from '@tanstack/react-table'
import { Input } from '../Input'
import { Button } from '../Button'
import { Select } from '../Select'
import IconChevronDoubleLeft from '../SVGIcons/IconChevronDoubleLeft';
import IconChevronDoubleRight from '../SVGIcons/IconChevronDoubleRight';
import {Text} from '../Text';

interface PaginationProps<T> {
  table: Table<T>
}

const OPTIONS: TSelectOptions = [
  {
    value: '10',
    label: '10'
  },
  {
    value: '20',
    label: '20'
  },
  {
    value: '30',
    label: '30'
  },
  {
    value: '40',
    label: '40'
  },
  {
    value: '50',
    label: '50'
  }
]

export function AdvancedPagination<TData>({ table }: PaginationProps<TData>) {
  return (
    <div className="advanced-table__pagination">
      <Select className={'no-border'} options={OPTIONS} />
      {/*<select*/}
      {/*  value={table.getState().pagination.pageSize}*/}
      {/*  onChange={(e) => {*/}
      {/*    table.setPageSize(Number(e.target.value))*/}
      {/*  }}*/}
      {/*>*/}
      {/*  {[10, 20, 30, 40, 50].map((pageSize) => (*/}
      {/*    <option key={pageSize} value={pageSize}>*/}
      {/*      {pageSize}*/}
      {/*    </option>*/}
      {/*  ))}*/}
      {/*</select>*/}
      <div className={'advanced-table__pagination__right'}>
        <Text type={'tertiary'}>
          Showing {table.getState().pagination.pageIndex + 1} - {table.getPageCount().toLocaleString()} of 0000
        </Text>
        <Input
            type="number"
            min="1"
            max={table.getPageCount()}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className="border p-1 rounded w-16"
        />
        <div className="advanced-table__pagination__counts">
          <Button
              onClick={() => table.firstPage()}
              iconProps={{
                Component: IconChevronDoubleLeft
              }}
              disabled={!table.getCanPreviousPage()}
          />
          <Button
              onClick={() => table.previousPage()}
              iconProps={{
                Component: IconChevronLeft
              }}
              disabled={!table.getCanPreviousPage()}
          />
          <Button
              onClick={() => table.nextPage()}
              iconProps={{
                Component: IconChevronRight
              }}
              disabled={!table.getCanNextPage()}
          />
          <Button
              onClick={() => table.lastPage()}
              iconProps={{
                Component: IconChevronDoubleRight
              }}
              disabled={!table.getCanNextPage()}
          />
        </div>
      </div>
    </div>
  )
}
