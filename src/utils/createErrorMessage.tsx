import React from 'react'
import { ErrorMessage as ReactHookFormErrorMessage } from '@hookform/error-message'
import ErrorMessage from '../helperComponents/ErrorMessage'

export const createErrorField = (props: TCreateErrorFieldParams) => {
  const { errors, name, errorMessage } = props

  let content

  if (!errorMessage) {
    content = (
      <ReactHookFormErrorMessage
        name={name}
        errors={errors}
        render={({ message }) => <p className="error-message">{message}</p>}
      />
    )
  } else {
    content = <ErrorMessage message={errorMessage || ''} />
  }

  return content
}
