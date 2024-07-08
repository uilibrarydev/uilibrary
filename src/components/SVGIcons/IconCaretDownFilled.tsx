import React, { ReactElement } from 'react'
import {ISVGIconProps} from './types';
import classNames from 'classnames'

export const IconCaretDownFilled = ({size, type, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
      <path d="M7.00805 8C5.9341 8 5.36012 9.2649 6.06733 10.0731L11.5892 16.3838C12.2864 17.1806 13.526 17.1806 14.2232 16.3838L19.745 10.0731C20.4522 9.2649 19.8782 8 18.8043 8H7.00805Z" fill="#222222"/>
  </svg>
);

export default IconCaretDownFilled;