import React, { useMemo } from 'react'
import InputMask from 'react-input-mask'
import ErrorMessage from '../../helperComponents/ErrorMessage'
import { InputCustomProps } from './types'
import '../../assets/styles/components/_input.scss'
import Icon from '../Icon'
import Label from '../../helperComponents/Label'
import Text from '../Text'

export const Input = React.forwardRef<HTMLInputElement, InputCustomProps>(
  (
    {
      className,
      size = 'large',
      error,
      hasError,
      label,
      mask,
      onChange,
      currentValue,
      name,
      leftIconProps,
      rightIconProps,
      disabled,
      required,
      readonly,
      placeholder,
      type = 'text',
      helperText,
      successMessage,
      maxCount,
      handleChange,
        dataId='',
      ...rest
    },
    ref
  ): JSX.Element => {
    const isErrorVisible = hasError !== undefined ? hasError : !!error

    const changeHandler = (event: TChangeEventType) => {
      const length = event.target.value.length
      if (length - 1 === maxCount) {
        return
      }
      if (onChange) {
        onChange(event)
      }
      if (handleChange) {
        handleChange(event)
      }
    }

    const currentLength = useMemo(() => {
      if (currentValue) {
        return currentValue.length
      }
      if (rest && rest.value && typeof rest.value === 'string') {
        return rest.value.length
      }
      return 0
    }, [rest, currentValue])

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
        disabled={disabled}
        data-id={dataId}
        className={`${isErrorVisible ? 'with-error-styles' : ''}`}
        {...(currentValue ? { value: currentValue } : {})}
      />
    ) : (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <input
        readOnly={readonly}
        disabled={disabled}
        name={name}
        ref={ref}
        required={isErrorVisible || !!error}
        type={type}
        placeholder={!label ? placeholder : ''}
        onChange={changeHandler}
        data-id={dataId}
        {...rest}
        {...(currentValue !== undefined ? { value: currentValue } : {})}
      />
    )

    return (
      <div
        className={`input input--${size} 
                             ${className}
                             ${leftIconProps ? 'input--icon-left' : ''}
                             ${rightIconProps ? 'input--icon-right' : ''}
                             ${isErrorVisible ? 'input--invalid' : ''}
                             `}
      >
        <Label text={label} invalid={isErrorVisible} required={required} disabled={disabled} />
        <label className="input__inner">
          {input}
          {leftIconProps && (
            <Icon
              size="small"
              {...leftIconProps}
              className={`input__icon input__icon--left ${
                leftIconProps.className ? leftIconProps.className : ''
              }`}
            />
          )}
          {rightIconProps && (
            <Icon
              size="small"
              {...rightIconProps}
              className={`input__icon input__icon--right ${
                rightIconProps.className ? rightIconProps.className : ''
              }`}
            />
          )}
        </label>

        {error || successMessage || helperText || maxCount ? (
          <div className="input__message mt-4">
            {isErrorVisible && error ? <ErrorMessage message={error} icon="info-hover"  dataId={dataId}/> : null}
            {successMessage ? (
              <Text size="small" type="success" className="flexbox align-items--center">
                <>
                  <Icon name="circle-mark-hover" type="success" size="xsmall" />
                  <span className="ml-4">{successMessage}</span>
                </>
              </Text>
            ) : null}
            {helperText && !successMessage ? (
              <Text size="small" type="secondary">
                {helperText}
              </Text>
            ) : null}

            {maxCount ? (
              <Text size="small" type="secondary" className="input__counter">
                {`${currentLength}/${maxCount}`}
              </Text>
            ) : null}
          </div>
        ) : null}
      </div>
    )
  }
)

Input.displayName = 'FormInput'
export default Input
