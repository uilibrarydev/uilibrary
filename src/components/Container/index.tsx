import React, { FC } from 'react'
import { TContainerProps } from './types'
import './index.scss'

const Container: FC<TContainerProps> = (props) => {
  const { children, title } = props

  return (
    <div className="container">
      <h1>{title || ''}</h1>
      {children}
    </div>
  )
}

export default Container
