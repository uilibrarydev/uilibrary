import React from 'react'
import ErrorMessage from '../../helperComponents/ErrorMessage'
import Label from '../../helperComponents/Label'
import {TChangeEventType} from '../../types/globals'
import {TTextAreaTypeProps} from './types'
import Text from '../Text';
import Icon from '../Icon';
import '../../assets/styles/components/_textarea.scss';
import './index.scss';

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
            <div className={`textarea  ${className} ${error ? 'textarea--invalid' : ''}`}
            >
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
                {required && error && <ErrorMessage message={error} icon="info-fill" />}
                {valid && (
                    <Text size="small" type="success" className="textarea__message">
                        <>
                            <Icon name="circle-mark-fill" className="textarea__message__icon" size="xsmall" />
                            <span>This is your helper text</span>
                        </>
                    </Text>
                )}
            </div>
        )
    }
)

Textarea.displayName = 'Textarea'
export default Textarea
