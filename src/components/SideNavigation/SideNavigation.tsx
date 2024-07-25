import { TSideNavigationPropTypes } from './types'
import React from 'react'
import classNames from 'classnames'
import IconChevronRight from '../SVGIcons/IconChevronRight'
import IconChevronLeft from '../SVGIcons/IconChevronLeft'

export const SideNavigation = (props: TSideNavigationPropTypes): JSX.Element => {
  const { children, open, setOpen } = props

  const handleToggleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className={classNames('side--navigation', open ? 'open' : 'close')}>
      {children}
      <div className="collapse" onClick={handleToggleOpen}>
        {open ? (
          <IconChevronLeft type="inverse" />
        ) : (
          <IconChevronRight type="inverse" size="medium" />
        )}
      </div>
    </div>
  )
}
