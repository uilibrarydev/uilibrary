import React, { ForwardedRef, forwardRef, useEffect, useRef } from 'react'
import classNames from 'classnames'
import {
  Text,
  Chips,
  Checkbox,
  Avatar,
  Link as LinkComponent,
  Progress as ProgressComponent,
  Button
} from '../'
import { TCellWithInfo, TUser, EColumns, TColumn } from './types'

const CheckboxWithRef = forwardRef(Checkbox)

type IndeterminateCheckboxProps = {
  indeterminate: boolean
  checked: boolean
  onChange: (e: { target: { checked: boolean } }) => void
}

type RenderCellProps = {
  data: string | TUser | TCellWithInfo
  column: TColumn
  row: any
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

IndeterminateCheckbox.displayName = 'IndeterminateCheckbox'

const Badge = ({ data, column }: RenderCellProps) => {
  const cellData = data as TCellWithInfo
  return (
    <>
      {column.columnProps.showText && <Text>{cellData.label}</Text>}
      <Chips size="small" text={cellData.value} color="brand" type="outlined" />
    </>
  )
}
const User = ({ data }: RenderCellProps) => {
  const { firstName, lastName, email } = data as TUser

  const initials = firstName[0] + lastName[0]

  return (
    <>
      <Avatar size="small" initials={initials} />
      <span>
        <Text>{firstName + ' ' + lastName}</Text>
        <Text>{email}</Text>
      </span>
    </>
  )
}
const Progress = ({ data, column }: RenderCellProps) => {
  const cellData = data as TCellWithInfo
  return (
    <span style={{ display: 'block' }}>
      {column.columnProps.showText && <Text>{cellData.label}</Text>}
      <ProgressComponent size="small" noText type="linear" percent={20} />
    </span>
  )
}

// const Status = ({ cell }: RenderCellProps) => {
//   return (
//     <>
//       <LinkComponent taget="_blank" url={cell.value[1]}>
//         {cell.value[0]}
//       </LinkComponent>
//     </>
//   )
// }

const RenderCell = (props: RenderCellProps) => {
  const { column, data, row } = props
  let Component = null
  console.log(data, ' ghgggggggggggggg', column)

  switch (column.columnProps?.type) {
    case EColumns.BADGE:
      Component = <Badge {...props} />
      break
    case EColumns.USER:
      Component = <User {...props} />
      break
    // case EColumns.LINK:
    //   Component = <Link cell={cell} />
    //   break
    case EColumns.PROGRESS:
      console.log(66666666)
      Component = <Progress {...props} />
      break
    default:
      Component = <Text>{data as string}</Text>
  }

  const icon = column?.columnProps?.iconProps

  return (
    <span
      className={classNames(`${column.columnProps?.type}_cell`, {
        revers_cell: column.columnProps.textRight
      })}
    >
      <>
        {icon?.leftIcon && (
          <Button
            iconProps={{ name: icon?.leftIcon }}
            size="small"
            type="tertiary"
            onClick={() => icon?.leftIconAction && icon.leftIconAction(row.original)}
          />
        )}
        {Component}
        {icon?.rightIcon && (
          <Button
            iconProps={{ name: icon?.rightIcon }}
            size="small"
            type="tertiary"
            onClick={() => icon?.rightIconAction && icon.rightIconAction(row.original)}
          />
        )}
      </>
    </span>
  )
}

export { IndeterminateCheckbox, RenderCell }
