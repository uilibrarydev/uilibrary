import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconLightbulbFilled = ({
  size,
  type,
  className = '',
  onClick,
  refHandler,
  id,
  dataId
}: ISVGIconProps): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classNames('svg-icon', {
      [`svg-icon__size-${size}`]: size,
      [`svg-icon__type-${type}`]: type,
      [className]: className
    })}
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-id={dataId ? `${dataId}-svg-icon` : ''}
  >
    <path
      d="M15.538 18.9994L15.2473 20.2579C15.0241 21.2212 14.2013 21.9188 13.2285 21.9934L13.0554 22H10.9437C9.95426 22 9.0885 21.3551 8.79678 20.4236L8.75135 20.2563L8.461 18.9994H15.538ZM12 2.0014C16.0041 2.0014 19.25 5.24734 19.25 9.2514C19.25 11.388 18.3144 13.3447 16.4846 15.0921C16.4493 15.1259 16.4247 15.1691 16.4137 15.2167L15.886 17.4994H8.114L7.58801 15.2168C7.57702 15.1692 7.55234 15.1259 7.51701 15.0922C5.68616 13.3447 4.75 11.388 4.75 9.2514C4.75 5.24734 7.99593 2.0014 12 2.0014Z"
      fill="#222222"
    />
  </svg>
)

export default IconLightbulbFilled
