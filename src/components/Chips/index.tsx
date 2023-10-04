import React, {ReactElement} from 'react'
import {Icon, Text} from '../index'

import {TChipsProps} from './types'
import classNames from 'classnames'
import '../../assets/styles/components/_chips.scss'

export const Chips = (props: TChipsProps): ReactElement => {
    const {
        type = 'filled',
        color = 'primary',
        size = 'large',
        text,
        disabled,
        className = '',
        leftIconProps,
        withAction,
        onClick
    } = props

    return (
        <div
            className={classNames(
                `chips chips--${type} chips--${disabled ? 'disabled' : color} chips--${size}`,
                className
            )}
        >
            {leftIconProps?.name && (
                <Icon
                    size={size == 'small' ? 'xsmall' : 'small'}
                    type={disabled ? 'disabled' : type == 'filled' ? 'inverse'  : color}
                    {...leftIconProps}
                    className="mr-6"
                />
            )}
            <Text
                type={disabled ? 'disabled' : type == 'filled' ? 'inverse' : color}
                size={size == 'small' ? 'small' : 'standard'}
                className="status__label"
            >
                <>{text}</>
            </Text>
            {withAction && (
                <Icon
                    name="close"
                    size={size == 'small' ? 'xsmall' : 'small'}
                    type={disabled ? 'disabled' : type == 'filled' ? 'inverse' : color}
                    className="chips__delete ml-6"
                    onClick={onClick}
                />
            )}
        </div>
    )
}

export default Chips
