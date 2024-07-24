import React, { ReactElement } from 'react'
import {ISVGIconProps} from './types';
import classNames from 'classnames'

export const IconCaretUpFilled = ({size, type, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
      <path d="M7.00805 16.9814C5.9341 16.9814 5.36012 15.7165 6.06733 14.9083L11.5892 8.59765C12.2864 7.80083 13.526 7.80083 14.2232 8.59765L19.745 14.9083C20.4522 15.7165 19.8782 16.9814 18.8043 16.9814H7.00805Z" fill="#222222"/>
  </svg>
);

export default IconCaretUpFilled;