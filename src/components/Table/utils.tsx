import React from 'react'
import { Column, Hooks } from 'react-table'
import { IndeterminateCheckbox } from './Columns'

export function setSelectedRows(hooks: Hooks, withSelect: boolean) {
  if (withSelect) {
    hooks.visibleColumns.push((columns: Column[]) => [
      {
        id: 'selection',

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

export function calcTableWidth(target: Window, withSelect: boolean) {
  return withSelect ? target.innerWidth - 114 : target.innerWidth - 84
}
