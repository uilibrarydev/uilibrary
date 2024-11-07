import React, { FC, PropsWithChildren } from 'react'
import {  TProgressBarWrapperPropTypes } from './types'
import classnames from 'classnames';

export const ProgressBarWrapper: FC<PropsWithChildren<TProgressBarWrapperPropTypes>> = ({className, children, ...rest})=> {
  return (
    <div className={classnames('progress-bar-wrapper', className)} {...rest}>
      {children}
    </div>
  )
}
