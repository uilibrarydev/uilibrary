import React from 'react'

type Props = {
  message: string
}

export const SelectEmptyState = (props: Props): JSX.Element => {
  const { message } = props
  return <div style={{ padding: 10 }}>{message}</div>
}
