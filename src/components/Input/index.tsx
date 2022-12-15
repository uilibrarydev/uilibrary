import React from 'react'
import InputMask from 'react-input-mask'
import Text from '../Text'
import ErrorMessage from '../../helperComponents/ErrorMessage'
import './index.scss'

export const Input = React.forwardRef<HTMLInputElement, TInputPropTypes>(
  ({ className, showError = false, error, label, mask, ...rest }, ref): JSX.Element => {
    const input = mask ? (
      <InputMask
        mask={mask}
        ref={ref}
        {...rest}
        className={`${error ? 'with-error-styles' : ''}`}
      />
    ) : (
      <input ref={ref} {...rest} className={`${error ? 'with-error-styles' : ''}`} />
    )

    return (
      <div className={`input-container ${className}`}>
        {label && (
          <Text color="labelGray" className="input-label">
            {label}
          </Text>
        )}
        {input}
        {showError && error && <ErrorMessage message={error} />}
      </div>
    )
  }
)

Input.displayName = 'FormInput'
export default Input
