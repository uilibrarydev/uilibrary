import React, { useMemo } from 'react'
import { ErrorMessage, Label } from '../../helperComponents'
import { TTextAreaTypeProps } from './types'
import { Text } from '../Text'
import { Icon } from '../Icon'
import '../../assets/styles/components/_textarea.scss'

export const Textarea = React.forwardRef<HTMLTextAreaElement, TTextAreaTypeProps>(
  (
    {
      className,
      error,
      hasError,
      label,
      disabled,
      currentValue,
      changeHandler,
      placeHolder,
      onChange,
      required = false,
      maxCount,
      helperText,
      successMessage,
      dataId = '',
      labelAddons,
      ...rest
    },
    ref
  ): JSX.Element => {
    const isErrorVisible = hasError !== undefined ? hasError : !!error

    const handleChange = (event: TChangeEventType) => {
      if (changeHandler) {
        changeHandler(event)
      }
      if (onChange) {
        onChange(event)
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

    return (
      <div className={`textarea  ${className} ${hasError ? 'textarea--invalid' : ''}`}>
        <Label
          text={label}
          invalid={isErrorVisible}
          required={required}
          disabled={disabled}
          labelAddons={labelAddons}
        />
        <div className="textarea__inner">
          {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore */}
          <textarea
            data-id={dataId}
            disabled={disabled}
            ref={ref}
            placeholder={label ? '' : placeHolder}
            onChange={handleChange}
            {...rest}
            {...(currentValue ? { value: currentValue } : {})}
          />
        </div>

        {error || successMessage || helperText || maxCount ? (
          <div className="textarea__message mt-4">
            {error && <ErrorMessage message={error} icon="info-hover" />}
            {successMessage ? (
              <Text size="small" type="success" className="flexbox align-items--center">
                <>
                  <Icon name="circle-mark-hover" type="success" size="xsmall" />
                  <span className="ml-4">{successMessage}</span>
                </>
              </Text>
            ) : null}
            {helperText && !successMessage ? (
              <Text size="small" type={disabled ? 'disabled' : 'secondary'}>
                {helperText}
              </Text>
            ) : null}

            {maxCount ? (
              <Text
                size="small"
                type={disabled ? 'disabled' : 'secondary'}
                className="textarea__counter"
              >
                {`${currentLength}/${maxCount}`}
              </Text>
            ) : null}
          </div>
        ) : null}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
