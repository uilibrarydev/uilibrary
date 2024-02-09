import React, { ReactElement } from 'react'
import { IconPropTypes } from './types'
import classNames from 'classnames';


export const Icon = ({
  name,
  type,
  size = 'medium',
  onClick,
  className = '',
  refHandler,
  id = '',
  dataId = ''
}: IconPropTypes): ReactElement => {
  return (
    <span
      data-id={`${dataId}-icon`}
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
