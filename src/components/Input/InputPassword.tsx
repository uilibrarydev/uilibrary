import React, { useEffect, useState } from 'react'
import type { InputPasswordsProps } from './types'
import { Input } from './Input'
import { IconCheckmark, IconDismiss, IconEyeOff, IconEyeOn } from '../SVGIcons'
import { Text } from '../Text'
import { Divider } from '../Divider'

export const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordsProps>(
  (props, ref): JSX.Element => {
    const { validations, onValidationChange, dataId, label, placeholder, hasError } = props
    const [password, setPassword] = useState<string>('')
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [validationResults, setValidationResults] = useState<Record<string, boolean>>({})
    const [isFocused, setIsFocused] = useState<boolean>(false)

    const eyeIcon = !showPassword
      ? {
          Component: IconEyeOn,
          onClick: () => {
            setShowPassword(!showPassword)
          }
        }
      : {
          Component: IconEyeOff,
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
          ref={ref}
          dataId={dataId}
          label={label}
          type={showPassword ? 'text' : 'password'}
          value={password}
          id={'password'}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={placeholder}
          rightIconProps={eyeIcon}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {hasError ? (
          <Divider className={'mt-12 mb-12'} type={'primary'} color={'dark'} isHorizontal={true} />
        ) : null}
        <div
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
              {password.length === 0 ? (
                <IconDismiss type={'disabled'} />
              ) : validationResults[rule.label] ? (
                <IconCheckmark type={'success'} />
              ) : (
                <IconDismiss type={isFocused ? 'disabled' : 'danger'} />
              )}
              <Text
                key={rule.label}
                type={
                  password.length === 0
                    ? 'disabled'
                    : validationResults[rule.label]
                    ? 'success'
                    : isFocused
                    ? 'disabled'
                    : 'danger'
                }
              >
                {rule.label}
              </Text>
            </div>
          ))}
        </div>
      </div>
    )
  }
)

InputPassword.displayName = 'InputPassword' // Add this line
