import React from 'react'
import InputMask from 'react-input-mask'
import ErrorMessage from '../../helperComponents/ErrorMessage'
import { TChangeEventType } from '../../types/globals'
import { InputCustomProps } from './types'
import '../../assets/styles/components/_input.scss'
import './index.scss'
import Icon from '../Icon'
import Label from '../../helperComponents/Label'
import Text from '../Text'

export const Input = React.forwardRef<HTMLInputElement, InputCustomProps>(
  (
    {
      className,
      size = 'large',
      error,
      valid,
      label,
      mask,
      onChange,
      currentValue,
      name,
      leftIcon,
      rightIcon,
      disabled,
      required,
      iconProps,
      placeholder,
      type = 'text',
      ...rest
    },
    ref
  ): JSX.Element => {
    const changeHandler = (event: TChangeEventType) => {
      if (onChange) {
        onChange(event)
      }
    }

    const input = mask ? (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <InputMask
        name={name}
        mask={mask}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={ref}
        {...rest}
        placeholder={placeholder}
        onChange={changeHandler}
        className={`${error ? 'with-error-styles' : ''}`}
        {...(currentValue ? { value: currentValue } : {})}
      />
    ) : (
      <input
        disabled={disabled}
        name={name}
        ref={ref}
        required={required}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        {...rest}
        {...(currentValue ? { value: currentValue } : {})}
      />
    )

    return (
      <div
        className={`input input--${size} 
                             ${className}
                             ${leftIcon && 'input--icon-left'}
                             ${rightIcon && 'input--icon-right'}
                             ${disabled && 'input--disabled'}
                             ${error ? 'input--invalid' : ''}
                             `}
      >
        <Label text={label} required={required} />
        <div className="input__inner">
          {input}
          {leftIcon && (
            <Icon {...iconProps} className="input__icon input__icon--left" size="small" />
          )}
          {rightIcon && (
            <Icon {...iconProps} className="input__icon input__icon--right" size="small" />
          )}
        </div>
        {required && error && <ErrorMessage message={error} icon="info-fill" />}
        {valid && (
          <Text size="small" type="success" className="input__message">
            <>
              <Icon name="circle-mark-fill" className="input__message__icon" size="xsmall" />
              <span>This is your helper text</span>
            </>
          </Text>
        )}
      </div>
    )
  }
)

Input.displayName = 'FormInput'
export default Input
