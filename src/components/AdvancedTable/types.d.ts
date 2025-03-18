import type {
  ColumnDef,
  ColumnSizingState,
  PaginationState,
  RowSelectionState,
  Table
} from '@tanstack/react-table'
import type { ReactNode } from 'react'

export type TTable<TData> = Table<TData>
export type TRowSelectionState = RowSelectionState
export type TColumnSizingState = ColumnSizingState
export type TPaginationState = PaginationState

export type TTableProps<TData> = {
  data: TData[]
  isLoading?: boolean
  columns: ColumnDef<TData>[]
  wi?: boolean
  className?: string
  withSelect?: boolean
  customHeader?: ReactNode
  defaultPageIndex?: number
  defaultPageSize?: number
  renderHeader?: (table: TTable<T>) => ReactNode
  renderFooter?: (table: Table<T>) => ReactNode
  onSortChange?: (state: SortingUpdateEvent) => void
  onRowSelection?: (state: TRowSelectionState) => void
  onColumnSizing?: (state: TColumnSizingState) => void
  onPaginationChange?: (state: TPaginationState) => void
}

export interface Column<TData> extends ColumnDef<TData> {
  enableColumnDragging?: boolean
}

export type SortingUpdateEvent = {
  column: string
  direction: 'asc' | 'desc' | false
  timestamp: number
}

export interface ICellProps<TData> {
  row: Row<TData>
}

export interface IHeaderProps<TData> {
  table: Table<TData>
}
