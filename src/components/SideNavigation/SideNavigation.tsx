import { TSideNavigationPropTypes } from './types'
import { Icon } from '../Icon'
import React from 'react'
import classNames from 'classnames'

export const SideNavigation = (props: TSideNavigationPropTypes): JSX.Element => {
  const { children, open, setOpen } = props

  const handleToggleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className={classNames('side--navigation', open ? 'open' : 'close')}>
      {children}
      <div className="collapse" onClick={handleToggleOpen}>
        <Icon name={open ? 'arrow-left' : 'arrow-right'} type="inverse" />
      </div>
    </div>
  )
}
