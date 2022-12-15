import React, { FC } from 'react'
import Text from '../Text'
import { TContainerProps } from './types'
import './index.scss'

const Container: FC<TContainerProps> = (props) => {
  const { children, title } = props

  return (
    <div className="container">
      <Text size="large">{title || ''}</Text>
      {children}
    </div>
  )
}

export default Container
