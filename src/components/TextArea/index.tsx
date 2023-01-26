import React from 'react'
import { TTextAreaTypeProps } from './types'
import ErrorMessage from '../../helperComponents/ErrorMessage'
import Label from '../../helperComponents/Label'
import { TChangeEventType } from '../../types/globals'
import './index.scss'

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
      required = false,
      ...rest
    },
    ref
  ): JSX.Element => {
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
        <Label text={label} required={required} />

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
