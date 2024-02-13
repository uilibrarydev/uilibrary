import React from 'react'
import { TextPropTypes } from './types'
import classNames from 'classnames'
import { noop } from '../../utils/helpers'

export const Text: React.FC<TextPropTypes> = (props: TextPropTypes) => {
  const {
    children,
    className = '',
    type = 'primary',
    size = 'standard',
    weight = 'regular',
    lineHeight = 'medium',
    dataId = '',
    onClick = noop,
    id = '',
    title
  } = props
  return (
    <p
      id={id}
      title={title}
      data-id={dataId}
      onClick={onClick}
      className={classNames(
        'body',
        size && `body-${size}`,
        type && `color-${type}`,
        weight,
        lineHeight && `lh-${lineHeight}`,
        className
      )}
    >
      {children}
    </p>
  )
}
