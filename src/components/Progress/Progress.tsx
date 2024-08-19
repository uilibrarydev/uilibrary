import React from 'react'
import { TProgressPropTypes } from './types'

enum CIRCLE_SIZES {
  small = 29,
  large = 45
}

export const Progress = (props: TProgressPropTypes): JSX.Element => {
  const {
    percent,
    stepCount,
    currentStep,
    type = 'linear',
    size = 'large',
    noText = false,
    dimension,
    className = '',
    loop = false
  } = props
  const _dimension = dimension ? dimension : CIRCLE_SIZES[size]
  const r = _dimension - 5

  const _percent = stepCount && currentStep ? (currentStep / stepCount) * 100 : percent

  const strokeDasharray = `${2 * r * 3.14}px`

  return (
    <div
      className={`progress-bar progress-bar--${type} progress-bar--${size} ${className}${
        loop ? ' progress-bar--loop' : ''
      }`}
      style={
        type == 'circle'
          ? {
              width: 2 * _dimension,
              height: 2 * _dimension
            }
          : {}
      }
    >
      {type == 'circle' ? (
        <svg>
          <circle cx={_dimension} cy={_dimension} r={r}></circle>
          <circle
            cx={_dimension}
            cy={_dimension}
            r={r}
            style={{
              strokeDasharray,
              strokeDashoffset: `calc(${strokeDasharray} - (${strokeDasharray} * ${_percent}) / 100)`
            }}
          ></circle>
        </svg>
      ) : (
        <div className="progress-bar__inner">
          <div className="progress-bar__filled" style={{ width: `${_percent}%` }}></div>
        </div>
      )}
      {!noText ? (
        <span className="progress-bar__percent">
          {stepCount ? `${currentStep}/${stepCount}` : `${percent}%`}
        </span>
      ) : null}
    </div>
  )
}
