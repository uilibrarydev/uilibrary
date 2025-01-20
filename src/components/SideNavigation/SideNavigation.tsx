import type { TSideNavigationPropTypes } from './types'
import React from 'react'
import classNames from 'classnames'
import IconChevronRight from '../SVGIcons/IconChevronRight'
import { Button } from '../Button'

export const SideNavigation = (props: TSideNavigationPropTypes): JSX.Element => {
  const { children, isOpen = true, setOpen, showToggleIcon = true, className = '' } = props

  const handleToggleOpen = () => {
    setOpen?.(!isOpen)
  }

  return (
    <div className={classNames('side-navigation', isOpen ? 'side-navigation--opened' : null, className)}>
      {showToggleIcon && (
        <Button
          iconProps={{ Component: IconChevronRight }}
          size={'small'}
          className={'side-navigation__btn'}
          onClick={handleToggleOpen}
        />
      )}

      {children}
    </div>
  )
}
