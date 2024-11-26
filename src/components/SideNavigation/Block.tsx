import type { ReactElement } from 'react'
import React from 'react'
import { Text } from '../Text'
import type { TBlock } from './types'

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
