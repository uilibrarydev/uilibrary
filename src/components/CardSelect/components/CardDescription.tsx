import type { ReactElement } from 'react';
import React from 'react'
import { Text } from '../../Text'

interface TCardDescription {
  description?: string
  disabled?: boolean
}
export const CardDescription = (props: TCardDescription): ReactElement | null => {
  const { description, disabled } = props
  return description ? (
    <Text type={disabled ? 'disabled' : 'secondary'} className={'mt-8'}>
      <>{description}</>
    </Text>
  ) : null
}
