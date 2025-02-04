import React, { useEffect, useState } from 'react'
import type { InputPasswordsProps } from './types'
import { Input } from './Input'
import { IconCheckmark, IconDismiss, IconEyeOff, IconEyeOn } from '../SVGIcons'
import { Text } from '../Text'
import { Divider } from '../Divider'

const getTextType = (
  password: string,
  isValid: boolean,
  isFocused: boolean,
  hasError: boolean | undefined
) => {
  if (hasError) return 'danger'
  if (password.length === 0 || isFocused) return 'disabled'
  return isValid ? 'success' : 'danger'
}

const getIconType = (
  password: string,
  isValid: boolean,
  isFocused: boolean,
  hasError: boolean | undefined
) => {
  if (hasError) return <IconDismiss type="danger" />
  if (password.length === 0) return <IconDismiss type="disabled" />
  if (isValid) return <IconCheckmark type={isFocused ? 'disabled' : 'success'} />
  return <IconDismiss type={isFocused ? 'disabled' : 'danger'} />
}

export const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordsProps>(
  (props, ref): JSX.Element => {
    const {
      validations,
      onValidationChange,
      dataId,
      label,
      placeholder,
      hasError,
      error,
      onChange,
      onBlur,
      onFocus,
      ...rest
    } = props
    const [password, setPassword] = useState<string>('')
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [validationResults, setValidationResults] = useState<Record<string, boolean>>({})
    const [isFocused, setIsFocused] = useState<boolean>(false)

    const eyeIcon = {
      Component: !showPassword ? IconEyeOn : IconEyeOff,
      onClick: () => {
        setShowPassword(!showPassword)
      }
    }
    useEffect(() => {
      const results = validations.reduce((acc: Record<string, boolean>, rule) => {
        acc[rule.label] = rule.test(password)
        return acc
      }, {})

      setValidationResults(results)

      const isValid = Object.values(results).every(Boolean)
      onValidationChange?.(isValid)
    }, [password, validations, onValidationChange])

    return (
      <div className={'password-wrapper'}>
        <Input
          {...rest}
          ref={ref}
          dataId={dataId}
          label={label}
          type={showPassword ? 'text' : 'password'}
          onChange={(e) => {
            setPassword(e.target.value)
            if (onChange) {
              onChange(e)
            }
          }}
          placeholder={placeholder}
          rightIconProps={eyeIcon}
          onFocus={(e) => {
            setIsFocused(true)
            if (onFocus) {
              onFocus(e as TClickEventType)
            }
          }}
          onBlur={(e) => {
            setIsFocused(false)
            if (onBlur) {
              // @TODO add onBlur correct type
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              onBlur(e as TClickEventType)
            }
          }}
          error={error}
        />
        <div
          className={'mt-12'}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
          }}
        >
          {validations.map((rule) => (
            <div
              key={rule?.label}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              {getIconType(password, validationResults[rule.label], isFocused, hasError)}
              <Text
                key={rule.label}
                type={getTextType(password, validationResults[rule.label], isFocused, hasError)}
              >
                {rule.label}
              </Text>
            </div>
          ))}
          {hasError ? (
            <Divider
              className={'mt-12 mb-12'}
              type={'primary'}
              color={'dark'}
              isHorizontal={true}
            />
          ) : null}
        </div>
      </div>
    )
  }
)

InputPassword.displayName = 'InputPassword'
