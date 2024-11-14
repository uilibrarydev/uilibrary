import type { FC, PropsWithChildren } from 'react';
import React from 'react'
import type { TProgressBarWrapperPropTypes } from './types'
import classnames from 'classnames'

export const ProgressBarWrapper: FC<PropsWithChildren<TProgressBarWrapperPropTypes>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div className={classnames('progress-bar-wrapper', className)} {...rest}>
      {children}
    </div>
  )
}
