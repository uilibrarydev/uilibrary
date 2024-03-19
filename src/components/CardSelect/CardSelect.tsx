import React, {ReactElement} from 'react'
import {Text} from '../Text'
import {TCardSelectProps} from './types'
import classNames from 'classnames'
import {Radio} from '../Radio'
import {Input} from '../Input'
import {Chips} from '../Chips'
import {Divider} from '../Divider'

export const CardSelect = (props: TCardSelectProps): ReactElement => {
    const {
        type,
        title,
        badgeText,
        description,
        inputProps,
        disabled,
        className = '',
        withAction = true,
        onClick,
        additionalInfo
    } = props

    return (
        <div
            className={classNames(`card-select card-select--${disabled ? 'disabled' : null}`, className)}
            onClick={onClick}
        >
            <div className="flexbox justify-content--between align-items--start">
                <Text type={disabled ? 'disabled' : 'primary'} size={'medium'} weight={'bold'}>
                    <>{title}</>
                </Text>

                {withAction && <Radio disabled={disabled} className={'ml-16'}/>}
            </div>

            {badgeText ? (
                <Chips
                    color={'brand'}
                    size={'small'}
                    text={badgeText}
                    disabled={disabled}
                    className={'mt-8'}
                />
            ) : null}

            {description ? (
                <Text type={disabled ? 'disabled' : 'secondary'} size={'small'} className={'mt-8'}>
                    <>{description}</>
                </Text>
            ) : null}

            {type !== 'simple' ? (<Input {...inputProps} className={'mt-16'} disabled={disabled}/>) : null}

            {additionalInfo?.length ? (
                <>
                    <Divider type={'primary'} isHorizontal={true} className={'mt-16 mb-16'}/>
                    <div className="card-select__list">
                        {additionalInfo.map((item) => {
                            return (
                                <div
                                    key={item.key}
                                    className="card-select__list__item flexbox justify-content--between mt-12"
                                >
                                    <Text
                                        type={disabled ? 'disabled' : 'secondary'}
                                        size={'small'}
                                        className={'pr-16'}
                                    >
                                        <>{item.key}</>
                                    </Text>
                                    <Text type={disabled ? 'disabled' : 'primary'} weight={'semibold'}>
                                        <>{item.value}</>
                                    </Text>
                                </div>
                            )
                        })}
                    </div>
                </>
            ) : null}
        </div>
    )
}
