import React from 'react'
import { TTextAreaTypeProps } from './types'
import Text from '../Text'
import ErrorMessage from '../../helperComponents/ErrorMessage'

export const TextArea = (props: TTextAreaTypeProps): JSX.Element => {
  const { className, showError = false, error, label, ...rest } = props
  return (
    <div className={`input-container ${className}`}>
      {label && (
        <Text color="labelGray" className="input-label">
          {label}
        </Text>
      )}
      <textarea {...rest} className={`${error ? 'with-error-styles' : ''}`} />
      {showError && error && <ErrorMessage message={error} />}
    </div>
  )
}

TextArea.displayName = 'TextArea'
export default TextArea
