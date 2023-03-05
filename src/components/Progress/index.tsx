import React from 'react'
import {TProgressPropTypes} from './types'
import '../../assets/styles/components/_progress.scss'

const Progress = (props: TProgressPropTypes): JSX.Element => {
    const {percent, type = 'linear', size = 'large', noText = false} = props

    const dimension = size === 'small' ? 29 : 45
    const r = dimension - 5

    const strokeDasharray = `${2 * r * 3.14}px`

    return (
        <div className={`progress-bar progress-bar--${type} progress-bar--${size}`}>
            {type == 'circle' ? (
                <svg>
                    <circle cx={dimension} cy={dimension} r={r}></circle>
                    <circle
                        cx={dimension}
                        cy={dimension}
                        r={r}
                        style={{
                            strokeDasharray,
                            strokeDashoffset: `calc(${strokeDasharray} - (${strokeDasharray} * ${percent}) / 100)`
                        }}
                    ></circle>
                </svg>
            ) : (
                <div className="progress-bar__inner">
                    <div className="progress-bar__filled" style={{width: `${percent}%`}}></div>
                </div>
            )}
            {!noText ? <span className="progress-bar__percent">{percent}%</span> : null}
        </div>
    )
}

export default Progress
