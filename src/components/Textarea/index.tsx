import React from 'react'
import ErrorMessage from '../../helperComponents/ErrorMessage'
import Label from '../../helperComponents/Label'
import {TChangeEventType} from '../../types/globals'
import {TTextAreaTypeProps} from './types'
import Text from '../Text'
import Icon from '../Icon'
import '../../assets/styles/components/_textarea.scss'
import './index.scss'

export const Textarea = React.forwardRef<HTMLTextAreaElement, TTextAreaTypeProps>(
    (
        {
            className,
            valid,
            error,
            label,
            disabled,
            currentValue,
            changeHandler,
            placeHolder,
            onChange,
            required = false,
            counter,
            helperText,
            successMessage,
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
            <div className={`textarea  ${className} ${error ? 'textarea--invalid' : ''}`}>
                <Label text={label} required={required} disabled={disabled}/>
                <div className="textarea__inner">
          <textarea
              disabled={disabled}
              ref={ref}
              placeholder={placeHolder}
              onChange={handleChange}
              {...rest}
              {...(currentValue ? {value: currentValue} : {})}
          />
                </div>
                {required && error && <ErrorMessage message={error} icon="info-fill"/>}
                {(valid || helperText || counter) ? (
                    <div className="textarea__message mt-4">
                        {valid && (
                            <Text size="small" type="success" className="flexbox align-items--center">
                                <>
                                    <Icon name="circle-mark-fill" type="success" size="xsmall"/>
                                    <span>{successMessage}</span>
                                </>
                            </Text>
                        )}
                        {helperText ? (
                            <Text size="small" type="secondary">
                                {helperText}
                            </Text>
                        ) : null}

                        {counter ? (
                            <Text size="small" type="secondary">
                                120/240
                            </Text>
                        ) : null}
                    </div>
                ): null}
            </div>
        )
    }
)

Textarea.displayName = 'Textarea'
export default Textarea
