import React from 'react'
import { TextPropTypes } from './types'
import { noop } from '../../utils'
import classNames from 'classnames'

const Text: React.FC<TextPropTypes> = (props: TextPropTypes) => {
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
        'white-space-pre-wrap',
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

export default Text
