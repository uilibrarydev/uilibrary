import React from 'react'
import Button from '../../Button'
import { TSelectButtonsProps } from './types'

export const SelectButtons = (props: TSelectButtonsProps): JSX.Element => {
  const { clearAll, selectAll } = props
  return (
    <div style={{ display: 'flex', marginLeft: 15 }}>
      <Button buttonText="Select All" type="text" onClick={selectAll} />
      <Button buttonText="Clear All" type="text" onClick={clearAll} />
    </div>
  )
}
