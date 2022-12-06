import React from 'react'
import { TErrorMessageProps } from './types'
import './index.scss'

const ErrorMessage = (props: TErrorMessageProps): JSX.Element => {
  const { message } = props
  return <span className="error-message">{message}</span>
}

export default ErrorMessage
