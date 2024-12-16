import React from 'react'
import type { TDividerProps } from './types'
import classnames from 'classnames'

export const Divider = (props: TDividerProps): JSX.Element => {
  const { type, color = 'dark', isHorizontal, className } = props
  return (
    <hr
      className={classnames(
        'divider',
        `divider--${type}`,
        `divider--${color}`,
        {
          'divider--horizontal': isHorizontal,
          'divider--vertical': !isHorizontal
        },
        className
      )}
    />
  )
}
