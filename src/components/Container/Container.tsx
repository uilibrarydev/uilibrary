import React, { FC } from 'react'
import { TContainerProps } from './types'

export const Container: FC<TContainerProps> = (props) => {
  const { children } = props

  return <div className="container">{children}</div>
}
