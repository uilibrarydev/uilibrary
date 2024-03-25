import React, { ReactElement } from 'react'
import { Text } from '../../Text'

interface TCardDescription {
  description?: string
  disabled?: boolean
}
export const CardDescription = (props: TCardDescription): ReactElement | null => {
  const { description, disabled } = props
  return description ? (
    <Text type={disabled ? 'disabled' : 'secondary'} size={'small'} className={'mt-8'}>
      <>{description}</>
    </Text>
  ) : null
}
