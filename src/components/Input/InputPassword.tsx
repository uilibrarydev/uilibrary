import React, { useEffect, useState } from 'react'
import type { InputPasswordsProps } from './types'
import { Input } from './Input'
import { IconEyeOff, IconEyeOn } from '../SVGIcons'
import { Text } from '../Text'
import { Divider } from '../Divider'
import IconDismissCircle from '../SVGIcons/IconDismissCircle'
import IconDismissCircleFilled from '../SVGIcons/IconDismissCircleFilled'
import IconCheckmarkCircleFilled from '../SVGIcons/IconCheckmarkCircleFilled'

const getTextType = (
  password: string,
  isValid: boolean,
  isFocused: boolean,
) => {
  if (password.length === 0) return 'disabled'
  if (isValid) return 'success'
  return isFocused ? 'disabled' : 'danger'
}

const getIconType = (
  password: string,
  isValid: boolean,
  isFocused: boolean,
) => {
  if (password.length === 0) return <IconDismissCircle size={'xsmall'} type="disabled" />
  if (isValid) return <IconCheckmarkCircleFilled size={'xsmall'} type={'success'} />
  return isFocused ? (
    <IconDismissCircle size={'xsmall'} type={'disabled'} />
  ) : (
    <IconDismissCircleFilled size={'xsmall'} type={'danger'} />
  )
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
      <div className={'input-password'}>
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
              onBlur(e)
            }
          }}
          error={error}
          hasError={hasError}
        />
        <div className={'input-password__validation mt-8'}>
          {validations.map((rule) => (
            <div className={'input-password__validation__item'} key={rule?.label}>
              {getIconType(password, validationResults[rule.label], isFocused)}
              <Text
                size={'small'}
                className={'pl-4'}
                key={rule.label}
                type={getTextType(password, validationResults[rule.label], isFocused)}
              >
                {rule.label}
              </Text>
            </div>
          ))}
          {hasError ? (
            <Divider type={'primary'} color={'light'} isHorizontal={true} />
          ) : null}
        </div>
      </div>
    )
  }
)

InputPassword.displayName = 'InputPassword'