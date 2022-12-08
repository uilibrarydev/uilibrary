import React from 'react'
import ErrorMessage from '../../helperComponents/ErrorMessage'
import './index.scss'

export const Input = React.forwardRef<HTMLInputElement, InputPropTypes>(
  ({ className, showError = false, error, label, ...rest }, ref): JSX.Element => {
    return (
      <div className={`input-container ${className}`}>
        {label && <span className="input-label">{label}</span>}
        <input ref={ref} {...rest} className={`${error ? 'with-error-styles' : ''}`} />
        {showError && error && <ErrorMessage message={error} />}
      </div>
    )
  }
)

Input.displayName = 'FormInput'
export default Input
