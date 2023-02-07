import React from 'react'
import { TErrorMessageProps } from './types'
import './index.scss'
import { Icon, Text } from '../../index'

const ErrorMessage = (props: TErrorMessageProps): JSX.Element => {
  const { message, icon } = props
  return (
    <Text className="error-message" size="small" type="danger">
      <>
        {icon && <Icon name={icon} className="error-message__icon" size="xsmall" />}
        <span>{message}</span>
      </>
    </Text>
  )
}

export default ErrorMessage
