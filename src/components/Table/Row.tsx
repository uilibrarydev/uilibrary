import React, { ReactElement, useMemo } from 'react'
import classNames from 'classnames'
import { Row as RowType, CellValue } from 'react-table'
import { CHECKBOX_DEFAULT_WIDTH, CHECKBOX_HEADER_ID } from './utils'

type Props = {
  row: RowType
  withSelect: boolean
  selectedFlatRows: RowType[]
}

function Row({ row, selectedFlatRows, withSelect }: Props): ReactElement {
  const isRowSelected = useMemo(
    () => selectedFlatRows.find((r) => r.id === row.id),
    [selectedFlatRows]
  )

  return (
    <tr {...row.getRowProps()} className={classNames({ selected: Boolean(isRowSelected) })}>
      {row.cells.map(({ getCellProps, column, render }: CellValue, i, arr: CellValue[]) => {
        const isSelection = column.id === CHECKBOX_HEADER_ID
        return (
          <td
            key={i}
            {...getCellProps()}
            style={{
              left:
                !isSelection && withSelect && column?.fixed === 'left' ? CHECKBOX_DEFAULT_WIDTH : 0
            }}
            className={classNames({
              fixed_column_left: column?.fixed === 'left',
              fixed_column_right: column?.fixed === 'right',
              fixed_checkbox: isSelection && arr[i + 1].column?.fixed === 'left'
            })}
          >
            {render('Cell')}
          </td>
        )
      })}
    </tr>
  )
}

export default Row
