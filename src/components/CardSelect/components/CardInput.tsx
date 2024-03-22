import React, { ReactElement } from 'react'
import { InputCustomProps } from '../../Input/types'
import { Input } from '../../Input'

interface TCardInput {
  inputProps?: InputCustomProps
  disabled?: boolean
}
export const CardInput = (props: TCardInput): ReactElement | null => {
  const { inputProps, disabled } = props
  return inputProps ? <Input {...inputProps} className={'mt-16'} disabled={disabled} /> : null
}
