import React, {useState} from 'react'
import classNames from 'classnames'
import {NavigationItemTypes, TNavigationLinkPropTypes} from './types'
import './index.scss'
import Icon from '../../Icon'
import Badge from '../../Badge'

const NavigationItem = (props: TNavigationLinkPropTypes) => {
    const {
        As,
        type,
        isOpen,
        iconName,
        showBadge,
        expandable = false,
        showAction = false,
        actionElm,
        active = false,
        badgeContent,
        children
    } = props

    const [childOpen, setChildOpen] = useState(false)

    const displayNavigationItem = () => {
        if (type === NavigationItemTypes.BLOCK_HEADER) {
            return isOpen ? As() : null
        }
        return As()
    }

    const displayHeader = isOpen && type === NavigationItemTypes.BLOCK_HEADER && showAction && actionElm && actionElm

    return (
        <>
            <div
                className={classNames('navigation--wrapper', `navigation--wrapper--${type}`)}
                onClick={() => setChildOpen(!childOpen)}
            >
                <div
                    className={classNames(
                        'navigation--item',
                        `navigation--item--${type}`,
                        expandable && 'expandable',
                        active && 'active'
                    )}
                >
                    <div className="navigation--item--wrapper">
                        {!isOpen && type === NavigationItemTypes.BLOCK_HEADER && As()}
                        {displayHeader}
                        {
                            <div
                                className={classNames('navigation--item--as--wrapper', isOpen ? 'open' : 'close')}
                            >
                                {displayNavigationItem()}
                            </div>
                        }
                        {!isOpen && type === NavigationItemTypes.SUB && As()}
                        {type === NavigationItemTypes.USER && iconName && isOpen && (
                            <Icon name={iconName} size="small"/>
                        )}
                    </div>
                    {showBadge && badgeContent && isOpen && (
                        <Badge type="primary" text={badgeContent} size="small"/>
                    )}
                    {expandable && isOpen && (
                        <div className={classNames('navigation--item--expandable--icon', childOpen && 'open')}>
                            <Icon name="arrow-down"/>
                        </div>
                    )}
                </div>
                {children && (
                    <div
                        className={classNames(
                            'navigation--items--child',
                            childOpen && 'active',
                            !isOpen && 'isOpen'
                        )}
                    >
                        {children}
                    </div>
                )}
            </div>
        </>
    )
}

export default NavigationItem
