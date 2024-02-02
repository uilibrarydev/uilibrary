import React, { ReactElement } from 'react'
import { LoaderProps } from './types'
import './styles.scss'

export const Loader = (props: LoaderProps): ReactElement => {
  const { size = 'large', type = 'lite' } = props
  return (
    <div className={`loader loader--${type} loader--${size}`}>
      <span className="loader__inner"></span>
    </div>
  )
}
