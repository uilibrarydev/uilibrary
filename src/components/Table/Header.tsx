import React, { ReactElement } from 'react'
import { HeaderGroup, CellValue } from 'react-table'
import classNames from 'classnames'
import { Icon, Text } from '../'
import { calcColumnWidth, CHECKBOX_HEADER_ID } from './utils'
import '../../assets/styles/components/_table.scss'

type Props = {
  fixedHeader: boolean
  tableWidth: number
  headerGroup: HeaderGroup
}

function Table({ headerGroup, tableWidth, fixedHeader = false }: Props): ReactElement {
  return (
    <tr
      {...headerGroup.getHeaderGroupProps()}
      className={classNames({ fixed_header: fixedHeader })}
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
                  <Icon size="xsmall" name={column.isSortedDesc ? 'arrow2-down' : 'arrow2-up'} />
                ) : (
                  ''
                )}
              </>
            </Text>
          </th>
        )
      })}
    </tr>
  )
}

export default Table
