import React from 'react'
import { TErrorMessageProps } from './types'
import Text from '../../components/Text'
import Icon from '../../components/Icon'
import './index.scss'

const ErrorMessage = (props: TErrorMessageProps): JSX.Element => {
  const { message, icon, dataId } = props
  return (
    <Text
      className="error-message flexbox"
      size="small"
      type="danger"
      dataId={`${dataId}-error-message`}
    >
      <>
        {icon && <Icon name={icon} className="mr-4" size="xsmall" />}
        <span>{message}</span>
      </>
    </Text>
  )
}

export default ErrorMessage
