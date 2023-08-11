import React from 'react'
import { Text } from '../../../index'

type Props = {
  mainMessage: string
  paragraphMessage?: string
}

export const SelectEmptyState = (props: Props): JSX.Element => {
  const { mainMessage, paragraphMessage } = props
  return (
    <div style={{ padding: 10 }}>
      <Text>{mainMessage}</Text>
      <Text>{paragraphMessage}</Text>
    </div>
  )
}
