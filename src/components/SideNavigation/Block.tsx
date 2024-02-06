import React, { ReactElement } from 'react'
import { Text } from '../Text'
import { TBlock } from './types'

export const Block = (props: TBlock): ReactElement => {
  const { children, label, open } = props
  return (
    <div className="side--navigation--block">
      <div className="side--navigation--block--label">
        {open && (
          <Text size="standard" type="tertiary">
            {label}
          </Text>
        )}
      </div>
      {children}
    </div>
  )
}
