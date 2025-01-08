import type { TSideNavigationPropTypes } from './types'
import React from 'react'
import classNames from 'classnames'
import IconChevronRight from '../SVGIcons/IconChevronRight'
import { Button } from '../Button'

export const SideNavigation = (props: TSideNavigationPropTypes): JSX.Element => {
  const { children, isOpen, setOpen } = props

  const handleToggleOpen = () => {
    setOpen(!isOpen)
  }

  return (
    <div className={classNames('side-navigation', isOpen ? 'side-navigation__opened' : null)}>
      <Button
        iconProps={{ Component: IconChevronRight }}
        size={'small'}
        className={'side-navigation__btn'}
        onClick={handleToggleOpen}
      />
      {children}
    </div>
  )
}
