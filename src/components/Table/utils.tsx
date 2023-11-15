import React from 'react'
import { Column, Hooks } from 'react-table'
import { IndeterminateCheckbox } from './Columns'

export function useSelectRows(hooks: Hooks, withSelect: boolean) {
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
