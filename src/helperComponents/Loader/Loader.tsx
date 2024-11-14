import type { ReactElement } from 'react';
import React from 'react'
import type { LoaderProps } from './types'

export const Loader = (props: LoaderProps): ReactElement => {
  const { size = 'large', type = 'lite' } = props
  return (
    <div className={`loader loader--${type} loader--${size}`}>
      <span className="loader__inner"></span>
    </div>
  )
}
