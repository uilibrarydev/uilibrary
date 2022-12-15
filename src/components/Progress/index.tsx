import React from 'react'
import { TProgressPropTypes } from './types'
import './index.scss'

const Progress = (props: TProgressPropTypes): JSX.Element => {
  const { percent } = props
  return (
    <div className="custom_progress">
      <div className="custom_progress_filled" style={{ width: `${percent}%` }} />
    </div>
  )
}

export default Progress
