import React, { ReactElement } from 'react'
import { HeaderGroup, CellValue } from 'react-table'
import classNames from 'classnames'
import { Icon, Text } from '../'
import { calcColumnWidth, CHECKBOX_HEADER_ID } from './utils'

type Props = {
  fixedHeader?: boolean
  tableWidth: number
  headerGroup: HeaderGroup
}

function Header({ headerGroup, tableWidth, fixedHeader = false }: Props): ReactElement {
  return (
    <tr
      {...headerGroup.getHeaderGroupProps()}
      className={classNames({ fixed_header: fixedHeader })}
    >
      {headerGroup.headers.map(
        (
          {
            id,
            minWidth,
            maxWidth,
            width,
            widthInPercent,
            getHeaderProps,
            fixed,
            columnProps,
            render,
            isSorted,
            isSortedDesc
          }: CellValue,
          i: number,
          arr: CellValue[]
        ) => {
          const isSelection = id === CHECKBOX_HEADER_ID

          const style = {
            width: isSelection ? 17 : calcColumnWidth(widthInPercent, tableWidth),
            ...(!isSelection && minWidth ? { minWidth } : {}),
            ...(!isSelection && maxWidth ? { maxWidth } : {}),
            ...(!isSelection && width ? { width } : {})
          }

          return (
            <th
              key={i}
              {...getHeaderProps(columnProps?.sortable ? getHeaderProps() : undefined)}
              className={classNames({
                fixed_column_left: fixed === 'left',
                fixed_column_right: fixed === 'right',
                fixed_checkbox_header: isSelection && arr[i + 1]?.fixed === 'left'
              })}
              style={style}
            >
              <Text className="table_header_cell" weight="bold">
                <>
                  {render('Header')}
                  {isSorted ? (
                    <Icon size="xsmall" name={isSortedDesc ? 'arrow2-down' : 'arrow2-up'} />
                  ) : (
                    ''
                  )}
                </>
              </Text>
            </th>
          )
        }
      )}
    </tr>
  )
}

export default Header
