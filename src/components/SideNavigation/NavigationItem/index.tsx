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
        userImage,
        active = false,
        badgeContent,
        children
    } = props

    const [childOpen, setChildOpen] = useState(false)

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
                        {isOpen &&
                            type === NavigationItemTypes.BLOCK_HEADER &&
                            showAction &&
                            actionElm &&
                            actionElm}
                        {iconName && type !== NavigationItemTypes.USER ? (
                            <Icon name={iconName} size="small"/>
                        ) : (
                            userImage
                        )}
                        {isOpen && As()}
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
                    <div className={classNames('navigation--items--childs', childOpen && 'active')}>
                        {children}
                    </div>
                )}
            </div>
        </>
    )
}

export default NavigationItem
