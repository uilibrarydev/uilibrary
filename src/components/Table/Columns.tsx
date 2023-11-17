import React, { ForwardedRef, forwardRef, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { CellValue } from 'react-table'
import {
  Text,
  Chips,
  Checkbox,
  Avatar,
  Link as LinkComponent,
  Progress as ProgressComponent,
  Button
} from '../'
import { EColumns, TColumn } from './types'

const CheckboxWithRef = forwardRef(Checkbox)

type IndeterminateCheckboxProps = {
  indeterminate: boolean
  checked: boolean
  onChange: (e: { target: { checked: boolean } }) => void
}

type RenderCellProps = {
  data: any
  column: TColumn
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

// const Badge = ({ cell }: RenderCellProps) => {
//   return (
//     <>
//       {cell.column.columnProps.showText && <Text>{cell.value[0]}</Text>}
//       <Chips size="small" text={cell.value[1]} color="brand" type="outlined" />
//     </>
//   )
// }
// const User = ({
//   firstName,
//   lastName,
//   email
// }: {
//   firstName: string
//   lastName: string
//   email: string
// }) => {
//   const initials = firstName[0] + lastName[0]
//
//   return (
//     <>
//       <Avatar size="small" initials={initials} />
//       <span>
//         <Text>{firstName + ' ' + lastName}</Text>
//         <Text>{email}</Text>
//       </span>
//     </>
//   )
// }
// const Progress = ({ cell }: RenderCellProps) => {
//   return (
//     <>
//       <Text>{cell.value[0]}</Text>
//       <ProgressComponent size="small" noText type="linear" percent={cell.value[1]} />
//     </>
//   )
// }
//
// const Link = ({ cell }: RenderCellProps) => {
//   return (
//     <>
//       <LinkComponent taget="_blank" url={cell.value[1]}>
//         {cell.value[0]}
//       </LinkComponent>
//     </>
//   )
// }

const RenderCell = ({ column, data }: RenderCellProps) => {
  let Component = null
  console.log(data, ' ghgggggggggggggg', column)

  return <Text>{typeof data === 'object' ? data.lastName : data}</Text>
  // switch (cell?.column.columnProps?.type) {
  //   // case EColumns.BADGE:
  //   //   Component = <Badge cell={cell} />
  //   //   break
  //   // case EColumns.USER:
  //   //   // Component = <User cell={cell} />
  //   //   break
  //   // case EColumns.LINK:
  //   //   Component = <Link cell={cell} />
  //   //   break
  //   // case EColumns.PROGRESS:
  //   //   Component = <Progress cell={cell} />
  //   //   break
  //   default:
  //     Component = <Text>{cell.value}</Text>
  // }
  //
  // const icon = cell.column?.columnProps?.iconProps
  //
  // return (
  //   <span
  //     className={classNames(`${cell.column.columnProps?.type}_cell`, {
  //       revers_cell: cell.column.columnProps.textRight
  //     })}
  //   >
  //     <>
  //       {icon?.leftIcon && (
  //         <Button
  //           iconProps={{ name: icon?.leftIcon }}
  //           size="small"
  //           type="tertiary"
  //           onClick={() => icon?.leftIconAction && icon.leftIconAction(cell.row.original)}
  //         />
  //       )}
  //       {Component}
  //       {icon?.rightIcon && (
  //         <Button
  //           iconProps={{ name: icon?.rightIcon }}
  //           size="small"
  //           type="tertiary"
  //           onClick={() => icon?.rightIconAction && icon.rightIconAction(cell.row.original)}
  //         />
  //       )}
  //     </>
  //   </span>
}

export { IndeterminateCheckbox, RenderCell }
