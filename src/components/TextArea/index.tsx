import React from 'react'
import { TTextAreaTypeProps } from './types'
import Text from '../Text'
import ErrorMessage from '../../helperComponents/ErrorMessage'
import './index.scss'
import { TChangeEventType } from '../../types/globals'

export const TextArea = React.forwardRef<HTMLTextAreaElement, TTextAreaTypeProps>(
  (
    {
      className,
      showError = false,
      error,
      label,
      currentValue,
      changeHandler,
      placeHolder,
      onChange,
      ...rest
    },
    ref
  ): JSX.Element => {
    console.log('checl value', rest)

    const handleChange = (event: TChangeEventType) => {
      if (changeHandler) {
        changeHandler(event)
      }
      if (onChange) {
        onChange(event)
      }
    }

    return (
      <div className={`input-container ${className}`}>
        {label && (
          <Text color="labelGray" className="input-label">
            {label}
          </Text>
        )}
        <textarea
          ref={ref}
          placeholder={placeHolder}
          onChange={handleChange}
          {...rest}
          {...(currentValue ? { value: currentValue } : {})}
          className={`custom-textarea ${error ? 'with-error-styles' : ''}`}
        />
        {showError && error && <ErrorMessage message={error} />}
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'
export default TextArea
