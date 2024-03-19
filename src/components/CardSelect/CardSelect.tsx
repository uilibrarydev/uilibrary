import React, {ReactElement} from 'react'
import {Text} from '../Text'
import {TCardSelectProps} from './types'
import classNames from 'classnames'
import {Radio} from '../Radio';
import {Input} from '../Input';
import {Chips} from '../Chips';
import {Divider} from '../Divider';

export const CardSelect = (props: TCardSelectProps): ReactElement => {
    const {
        title,
        badgeText,
        inputProps,
        disabled,
        className = '',
        withAction = true,
        onClick,
    } = props


    return (
        <div
            className={classNames(
                `card-select card-select--${disabled ? 'disabled' : null}`,
                className
            )}
            onClick={onClick}
        >
            <div className="flexbox justify-content--between align-items--start">
                <Text
                    size={'medium'}
                    weight={'bold'}
                    type={disabled ? 'disabled' : 'primary'}
                    className={'pr-16'}
                >
                    <>{title}</>
                </Text>

                {withAction && (
                    <Radio
                        disabled={disabled}
                    />
                )}
            </div>

            {badgeText ? <Chips color={'brand'} size={'small'} text={badgeText} disabled={disabled} className={'mt-8'} /> : null}

            <Input {...inputProps} className={'mt-16'} disabled={disabled}/>

            <Divider type={'primary'} isHorizontal={true} className={'mt-16 mb-16'}/>

            <div className="card-select__list">
                <div className="card-select__list__item flexbox justify-content--between mt-12">
                    <Text
                        size={'small'}
                        type={disabled ? 'disabled' : 'primary'}
                        className={'pr-16'}
                    >
                        <>Key</>
                    </Text>
                    <Text
                        weight={'semibold'}
                        type={disabled ? 'disabled' : 'primary'}
                    >
                        <>Value</>
                    </Text>
                </div>
            </div>
        </div>
    )
}
