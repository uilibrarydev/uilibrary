import React, { ForwardedRef, forwardRef, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { CellValue } from 'react-table'
import {
  Text,
  Chips,
  Checkbox,
  Avatar,
  Link as LinkComponent,
  Progress as ProgressComponent
} from '../'
import { EColumns } from './types'

const CheckboxWithRef = forwardRef(Checkbox)

type IndeterminateCheckboxProps = {
  indeterminate: boolean
  checked: boolean
  onChange: (e: { target: { checked: boolean } }) => void
}

type RenderCellProps = {
  cell: CellValue
}

const IndeterminateCheckbox = forwardRef(
  (
    { indeterminate, checked, onChange }: IndeterminateCheckboxProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const defaultRef = useRef()
    const resolvedRef: any = ref || defaultRef

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    const handleChange = (v: boolean) => {
      onChange({ target: { checked: v } })
    }

    return <CheckboxWithRef value={checked} onClick={handleChange} ref={resolvedRef} />
  }
)

const Badge = ({ cell }: { cell: CellValue }) => {
  return (
    <>
      {cell.column.columnProps.showText && <Text>{cell.value[0]}</Text>}
      <Chips size="small" text={cell.value[1]} color="brand" type="outlined" />
    </>
  )
}
const User = ({ cell }: { cell: CellValue }) => {
  const userName = cell.value[0].split(' ')
  const initials = userName[0][0] + userName[1][0]

  return (
    <>
      <Avatar size="small" initials={initials} />
      <span>
        <Text>{cell.value[0]}</Text>
        <Text>{cell.value[1]}</Text>
      </span>
    </>
  )
}
const Progress = ({ cell }: { cell: CellValue }) => {
  return (
    <>
      <Text>{cell.value[0]}</Text>
      <ProgressComponent size="small" noText type="linear" percent={cell.value[1]} />
    </>
  )
}

const Link = ({ cell }: { cell: CellValue }) => {
  return (
    <>
      <LinkComponent taget="_blank" url={cell.value[1]}>
        {cell.value[0]}
      </LinkComponent>
    </>
  )
}

const RenderCell = ({ cell }: RenderCellProps) => {
  let Component = null
  switch (cell?.column.columnProps?.type) {
    case EColumns.BADGE:
      Component = <Badge cell={cell} />
      break
    case EColumns.USER:
      Component = <User cell={cell} />
      break
    case EColumns.LINK:
      Component = <Link cell={cell} />
      break
    case EColumns.PROGRESS:
      Component = <Progress cell={cell} />
      break
    default:
      Component = <Text>{cell.render('Cell')}</Text>
  }

  return (
    <span
      className={classNames(`${cell?.column.columnProps?.type}_cell`, {
        revers_cell: cell.column.columnProps.textRight
      })}
    >
      {Component}
    </span>
  )
}

export { IndeterminateCheckbox, RenderCell, Progress, User, Link }
