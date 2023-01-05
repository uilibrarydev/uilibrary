import React from 'react'
import { TTextAreaTypeProps } from './types'
import Text from '../Text'
import ErrorMessage from '../../helperComponents/ErrorMessage'

export const TextArea = React.forwardRef<HTMLTextAreaElement, TTextAreaTypeProps>(
  ({ className, showError = false, error, label, ...rest }, ref): JSX.Element => {
    return (
      <div className={`input-container ${className}`}>
        {label && (
          <Text color="labelGray" className="input-label">
            {label}
          </Text>
        )}
        <textarea ref={ref} {...rest} className={`${error ? 'with-error-styles' : ''}`} />
        {showError && error && <ErrorMessage message={error} />}
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'
export default TextArea
