import React from 'react'
import InputMask from 'react-input-mask'
import Text from '../Text'
import ErrorMessage from '../../helperComponents/ErrorMessage'
import { TChangeEventType } from '../../types/globals'
import { InputCustomProps } from './types'
import './index.scss'

export const Input = React.forwardRef<HTMLInputElement, InputCustomProps>(
  ({ className, formValue, showError = false, error, label, mask, onChange }, ref): JSX.Element => {
    const changeHandler = (event: TChangeEventType) => {
      if (onChange) {
        onChange(event)
      }
    }
    const input = mask ? (
      <InputMask
        mask={mask}
        inputRef={ref}
        value={typeof formValue === 'string' ? formValue : ''}
        onChange={changeHandler}
        className={`${error ? 'with-error-styles' : ''}`}
      />
    ) : (
      <input
        ref={ref}
        onChange={changeHandler}
        value={typeof formValue === 'string' ? formValue : ''}
        className={`${error ? 'with-error-styles' : ''}`}
      />
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
