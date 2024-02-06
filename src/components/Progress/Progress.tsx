import React from 'react'
import { TProgressPropTypes } from './types'
import '../../assets/styles/components/_progress.scss'

enum CIRCLE_SIZES {
  small = 29,
  large = 45
}

export const Progress = (props: TProgressPropTypes): JSX.Element => {
  const {
    percent,
    type = 'linear',
    size = 'large',
    noText = false,
    dimension,
    className = '',
    loop = false
  } = props
  const _dimension = dimension ? dimension : CIRCLE_SIZES[size]
  const r = _dimension - 5

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
              strokeDashoffset: `calc(${strokeDasharray} - (${strokeDasharray} * ${percent}) / 100)`
            }}
          ></circle>
        </svg>
      ) : (
        <div className="progress-bar__inner">
          <div className="progress-bar__filled" style={{ width: `${percent}%` }}></div>
        </div>
      )}
      {!noText ? <span className="progress-bar__percent">{percent}%</span> : null}
    </div>
  )
}
