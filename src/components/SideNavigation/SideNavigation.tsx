import { TSideNavigationPropTypes } from './types'
import React from 'react'
import classNames from 'classnames'
import IconChevronRight from '../SVGIcons/IconChevronRight'
import IconChevronLeft from '../SVGIcons/IconChevronLeft'

export const SideNavigation = (props: TSideNavigationPropTypes): JSX.Element => {
  const {
    children,
    open,
    setOpen,
    sidebarOpenIconProps = {
      Component: IconChevronRight,
      size: 'medium'
    },
    sidebarCloseIconProps = {
      Component: IconChevronLeft,
      size: 'medium'
    }
  } = props

  const handleToggleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className={classNames('side--navigation', open ? 'open' : 'close')}>
      {children}
      <div className="collapse" onClick={handleToggleOpen}>
        {open ? (
          <>
            {sidebarOpenIconProps.Component && (
              <sidebarOpenIconProps.Component type="inverse" size={sidebarOpenIconProps.size} />
            )}
          </>
        ) : (
          <>
            {sidebarCloseIconProps.Component && (
              <sidebarCloseIconProps.Component type="inverse" size={sidebarCloseIconProps.size} />
            )}
          </>
        )}
      </div>
    </div>
  )
}
