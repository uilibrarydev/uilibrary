import React, { ReactElement } from 'react'
import { InputCustomProps } from '../../Input/types'
import { Input } from '../../Input'

interface TCardInput {
  inputProps?: InputCustomProps
  disabled?: boolean
  className?: string
}
export const CardInput = (props: TCardInput): ReactElement => {
  const { inputProps, disabled, className } = props
  return (
    <div className={className}>
      {inputProps ? <Input {...inputProps} className={'mt-16'} disabled={disabled} /> : null}
    </div>
  )
}
