import React from 'react'
import { Column, Hooks } from 'react-table'
import IndeterminateCheckbox from './IndeterminateCheckbox'

export const CHECKBOX_HEADER_ID = 'selection'
export const CHECKBOX_DEFAULT_WIDTH = 48

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
