import React from 'react'
import { TextAreaPropTypes } from './types'
import Text from '../Text'
import ErrorMessage from '../../helperComponents/ErrorMessage'

export const TextArea = React.forwardRef<HTMLTextAreaElement, TTextAreaTypeProps>(
  ({ className, showError = false, error, label, mask, ...rest }, ref): JSX.Element => {
    console.log(rest)

    const TextAreaField = (
      <textarea ref={ref} {...rest} className={`${error ? 'with-error-styles' : ''}`} />
    )

    return (
      <div className={`input-container ${className}`}>
        {label && (
          <Text color="labelGray" className="input-label">
            {label}
          </Text>
        )}
        {TextAreaField}
        {showError && error && <ErrorMessage message={error} />}
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'
export default TextArea
