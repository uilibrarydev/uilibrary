import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCaretUp = ({
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
    <g id="Direction=Up, Size=24, Theme=Regular">
      <path
        id="Shape"
        d="M6.06733 14.9083C5.36012 15.7165 5.9341 16.9814 7.00805 16.9814H18.8043C19.8782 16.9814 20.4522 15.7165 19.745 14.9083L14.2232 8.59765C13.526 7.80083 12.2864 7.80083 11.5892 8.59765L6.06733 14.9083ZM7.55899 15.4814L12.718 9.58541C12.8176 9.47158 12.9947 9.47158 13.0943 9.58541L18.2533 15.4814H7.55899Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconCaretUp
