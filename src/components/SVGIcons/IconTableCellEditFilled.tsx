import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconTableCellEditFilled = ({
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
    <g id="Size=24, Theme=Filled">
      <g id="Shape">
        <path
          d="M5.25 6.5C4.00736 6.5 3 7.50736 3 8.75V13.25C3 14.4926 4.00736 15.5 5.25 15.5H8L8 6.5H5.25Z"
          fill="#222222"
        />
        <path
          d="M12.4883 14.8648C12.2951 15.058 12.1249 15.2712 11.9801 15.5H9.5L9.5 6.5H14.5L14.5 12.8531L12.4883 14.8648Z"
          fill="#222222"
        />
        <path
          d="M20.7151 8C20.7679 8.00002 20.8206 8.00132 20.8733 8.00388C20.5656 7.12796 19.7311 6.5 18.75 6.5H16L16 11.3531L18.3907 8.96235C19.0317 8.32137 19.8742 8.00038 20.713 8H20.7151Z"
          fill="#222222"
        />
        <path
          d="M20.7152 9H20.7131C20.1285 9.00027 19.5439 9.22342 19.0979 9.66946L13.1955 15.5719C12.8513 15.916 12.6072 16.3472 12.4892 16.8194L12.0315 18.6501C11.8325 19.4462 12.5536 20.1674 13.3497 19.9683L15.1804 19.5106C15.6526 19.3926 16.0838 19.1485 16.4279 18.8043L22.3303 12.9019C23.223 12.0093 23.223 10.5621 22.3303 9.66946C21.8843 9.22342 21.2998 9.00027 20.7152 9Z"
          fill="#222222"
        />
      </g>
    </g>
  </svg>
)

export default IconTableCellEditFilled
