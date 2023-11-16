import { Column, TableState } from 'react-table'

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export enum EColumns {
  USER = 'user',
  LINK = 'link',
  PROGRESS = 'progress',
  BADGE = 'badge'
}

export type TColumnProps = {
  type?: EColumns
  showText?: boolean
  showInfo?: boolean
  sortable?: boolean
  textRight?: boolean
}

export type TFixedSide = 'left' | 'right'

export type TColumnFields = {
  columnProps?: TColumnProps
  fixed?: TFixedSide
  widthInPercent?: IntRange<0, 100>
}

export type TColumn = Omit<Column & TColumnFields, 'Cell'>

export type TTableProps = {
  columns: TColumn[]
  data: any
  withSelect?: boolean
  fixedHeader?: boolean
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
