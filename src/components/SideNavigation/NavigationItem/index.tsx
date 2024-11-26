import type { ReactElement } from 'react'
import React, { useState } from 'react'
import classNames from 'classnames'
import type { TNavigationLinkPropTypes } from './types'
import { NavigationItemTypes } from './types'
import { Badge } from '../../Badge'
import IconArrowDown from '../../SVGIcons/IconArrowDown'
import IconDynamicComponent from '../../../helperComponents/IconDynamicComponent/IconDynamicComponent'

export const NavigationItem = (props: TNavigationLinkPropTypes): ReactElement => {
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
    expandIconProps = {
      Component: IconArrowDown,
      size: 'medium'
    },
    children
  } = props

  const [childOpen, setChildOpen] = useState(false)

  const displayNavigationItem = () => {
    if (type === NavigationItemTypes.BLOCK_HEADER && !isOpen) {
      return null
    }
    return As()
  }

  const displayHeader =
    isOpen && type === NavigationItemTypes.BLOCK_HEADER && showAction && actionElm && actionElm

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
              <IconDynamicComponent componentName={iconName} />
            )}
          </div>
          {showBadge && badgeContent && isOpen && (
            <Badge type="primary" text={badgeContent} size="small" />
          )}
          {expandable && isOpen && (
            <div className={classNames('navigation--item--expandable--icon', childOpen && 'open')}>
              {expandIconProps.Component && (
                <expandIconProps.Component size={expandIconProps.size || 'small'} />
              )}
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
