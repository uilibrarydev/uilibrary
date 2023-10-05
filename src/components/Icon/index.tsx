import React, { ReactElement } from 'react'
import { IconPropTypes } from './types'
import classNames from 'classnames'

const Icon = ({
  name,
  type,
  size = 'medium',
  onClick,
  className = '',
  refHandler,
  id = ''
}: IconPropTypes): ReactElement => {
  return (
    <span
      className={classNames('icon', `icon--${size}`, {
        [`color-${type}`]: type,
        [className]: className
      })}
      id={`${id}`}
    >
      <i ref={refHandler} onClick={onClick} className={`icon-${name}`} />
    </span>
  )
}

export default Icon
