import React, { FC } from 'react'
import { TContainerProps } from './types'
import './index.scss'

const Container: FC<TContainerProps> = (props) => {
  const { children } = props

  return <div className="container">{children}</div>
}

export default Container
