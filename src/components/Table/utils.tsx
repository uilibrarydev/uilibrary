import React from 'react'
import { Column, Hooks } from 'react-table'
import { IndeterminateCheckbox } from './Columns'

export const CHECKBOX_HEADER_ID = 'selection'

export function setSelectedRows(hooks: Hooks, withSelect: boolean) {
  if (withSelect) {
    hooks.visibleColumns.push((columns: Column[]) => [
      {
        id: CHECKBOX_HEADER_ID,

        Header: ({ getToggleAllRowsSelectedProps }: any) => (
          <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
        ),
        Cell: ({ row }: any) => <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
      },
      ...columns
    ])
  }
}

export function calcColumnWidth(percent: number, tableWidth: number) {
  return (percent * tableWidth) / 100
}

export function calcTableWidth(withSelect: boolean, target: HTMLTableElement | null) {
  return target ? (withSelect ? target.offsetWidth - 104 : target.offsetWidth - 84) : 200
}
