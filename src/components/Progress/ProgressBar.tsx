import React from 'react'
import { TProgressBarPropTypes } from './types'
import {Progress} from './Progress';
import classnames from 'classnames';

export const ProgressBar = (props: TProgressBarPropTypes): JSX.Element => {
  const {
    stepItems,
    size = 'large',
    className = '',
  } = props

  return (
    <div className={classnames('progress-bar-wrapper', className)}>
      {stepItems?.map(({percent }, index) => (
          <Progress key={index} percent={percent} size={size} noText={true} className={'progress-bar-wrapper__item'}/>
      ))}
    </div>
  )
}
