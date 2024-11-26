import type { ReactElement } from 'react'
import React from 'react'
import type { HeaderGroup, CellValue } from 'react-table'
import classNames from 'classnames'
import { calcColumnWidth, CHECKBOX_DEFAULT_WIDTH, CHECKBOX_HEADER_ID } from './utils'
import { Text } from '../Text'
import IconArrowDown from '../SVGIcons/IconArrowDown'
import IconArrowUp from '../SVGIcons/IconArrowUp'

type Props = {
  fixedHeader?: boolean
  withSelect: boolean
  tableWidth: number
  headerGroup: HeaderGroup
}

export function Header({
  headerGroup,
  tableWidth,
  withSelect,
  fixedHeader = false
}: Props): ReactElement {
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
            isSortedDesc,
            getSortByToggleProps
          }: CellValue,
          i: number,
          arr: CellValue[]
        ) => {
          const isSelection = id === CHECKBOX_HEADER_ID

          const style = {
            width: isSelection
              ? CHECKBOX_DEFAULT_WIDTH
              : calcColumnWidth(widthInPercent, tableWidth),
            left: !isSelection && withSelect && fixed === 'left' ? CHECKBOX_DEFAULT_WIDTH : 0,
            ...(!isSelection && minWidth ? { minWidth } : {}),
            ...(!isSelection && maxWidth ? { maxWidth } : {}),
            ...(!isSelection && width ? { width } : {})
          }

          return (
            <th
              key={i}
              {...getHeaderProps(columnProps?.sortable ? getSortByToggleProps() : undefined)}
              className={classNames({
                fixed_column_left: fixed === 'left',
                fixed_column_right: fixed === 'right',
                fixed_checkbox: isSelection && arr[i + 1]?.fixed === 'left',
                pointer: columnProps?.sortable
              })}
              style={style}
            >
              <div className="flexbox align-items--center">
                <Text weight="bold" className="text-truncate">
                  {render('Header')}
                </Text>
                {isSorted && isSortedDesc && <IconArrowDown size="xsmall" className="ml-4" />}
                {isSorted && !isSortedDesc && <IconArrowUp size="xsmall" className="ml-4" />}
                {!isSorted && columnProps?.sortable && (
                  <IconArrowDown size="xsmall" className="ml-4 unsorted__icon" />
                )}
              </div>
            </th>
          )
        }
      )}
    </tr>
  )
}
