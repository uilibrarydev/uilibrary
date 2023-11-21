import React, { ReactElement } from 'react'
import classNames from 'classnames'
import { Row as RowType, CellValue } from 'react-table'
import { CHECKBOX_HEADER_ID } from './utils'

type Props = {
  row: RowType
  selectedFlatRows: RowType[]
}

function Row({ row, selectedFlatRows }: Props): ReactElement {
  const isRowSelected = selectedFlatRows.find((r) => r.id === row.id)

  return (
    <tr {...row.getRowProps()} className={classNames({ selected_row: Boolean(isRowSelected) })}>
      {row.cells.map((cell: CellValue, i, arr: CellValue[]) => {
        return (
          <td
            key={i}
            {...cell.getCellProps()}
            className={classNames({
              fixed_column_left: cell.column?.fixed === 'left',
              fixed_column_right: cell.column?.fixed === 'right',
              fixed_checkbox:
                cell?.column.id === CHECKBOX_HEADER_ID && arr[i + 1].column?.fixed === 'left'
            })}
          >
            {cell.render('Cell')}
          </td>
        )
      })}
    </tr>
  )
}

export default Row
