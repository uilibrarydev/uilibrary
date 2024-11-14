import React from 'react'
import type { TDividerProps } from './types'
import classnames from 'classnames'

export const Divider = (props: TDividerProps): JSX.Element => {
  const { type, isHorizontal, className } = props
  return (
    <hr
      className={classnames(
        'divider',
        `divider--${type}`,
        {
          'divider--horizontal': isHorizontal,
          'divider--vertical': !isHorizontal
        },
        className
      )}
    />
  )
}
