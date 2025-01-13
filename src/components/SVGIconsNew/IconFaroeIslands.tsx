import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconFaroeIslands = ({
  size,
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
      [className]: className
    })}
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-id={dataId ? `${dataId}-svg-icon` : ''}
  >
    <g clipPath="url(#clip0_3366_15707)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#F0F0F0"
      />
      <path
        d="M19.5653 10L19.9152 8.6957C19.8571 8.25113 19.7699 7.81566 19.6556 7.39137H9.13046V0.0380859C8.68671 0.0762891 8.25136 0.143828 7.82613 0.238125L6.08699 1.30437L5.21742 1.2166C4.7598 1.46629 4.32382 1.75066 3.91308 2.06625V7.39133H0.344526C0.23019 7.81562 0.143003 8.25109 0.0848779 8.69566L0.4348 10L0.0848389 11.3044C0.142964 11.7489 0.230151 12.1844 0.344487 12.6087H3.91304V17.9338C4.32378 18.2494 4.7598 18.5338 5.21738 18.7834L6.52171 18.6957L7.82605 19.7619C8.25132 19.8562 8.68668 19.9237 9.13039 19.962V12.6087H19.6555C19.7698 12.1845 19.857 11.749 19.9151 11.3044L19.5653 10Z"
        fill="#0052B4"
      />
      <path
        d="M19.9154 8.69576H7.82613H7.82609V0.237793C6.90195 0.442715 6.02582 0.774863 5.21738 1.216V8.69572H0.0846484C0.0290625 9.12271 0 9.55803 0 10.0001C0 10.4422 0.0290625 10.8775 0.0846484 11.3044H5.21734H5.21738V18.7842C6.02582 19.2253 6.90195 19.5575 7.82609 19.7624V11.3046V11.3045H19.9154C19.9709 10.8775 20 10.4422 20 10.0001C20 9.55803 19.9709 9.12271 19.9154 8.69576Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_3366_15707">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default IconFaroeIslands
