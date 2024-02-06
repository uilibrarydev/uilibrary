import React from 'react'
import { HeadingPropTypes } from './types'
import { noop } from '../../utils/helpers'
import classNames from 'classnames'

export const Heading: React.FC<HeadingPropTypes> = (props: HeadingPropTypes) => {
  const {
    children,
    className = '',
    size = 'small',
    lineHeight = 'large',
    type: As = 'h1',
    weight = 'regular',
    onClick = noop,
    dataId = ''
  } = props

  return (
    <As
      dataid={dataId}
      onClick={onClick}
      className={classNames(
        'heading',
        size && `heading-${size}`,
        weight,
        lineHeight && `lh-${lineHeight}`,
        className
      )}
    >
      {children}
    </As>
  )
}
