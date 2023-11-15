import { Column, TableState } from 'react-table'

export enum EColumns {
  USER = 'user',
  LINK = 'link',
  PROGRESS = 'progress',
  BADGE = 'badge'
}

export type TColumnProps = {
  type: EColumns
  showText?: boolean
  showInfo?: boolean
  sortable?: boolean
  textRight?: boolean
}

export type TColumn = Omit<Column & { columnProps?: TColumnProps; fixed?: boolean }, 'Cell'>

export type TTableProps = {
  columns: TColumn[]
  data: any
  withSelect?: boolean
  onChange: (state: TableState) => void
}

export type SortBy = {
  id: string
  desc: boolean
}

export interface TTableState extends TableState {
  selectedRowIds?: Record<string, number>
  pageSize?: number
  pageIndex?: number
  sortBy?: SortBy[]
}
