import React from 'react'
import './index.scss'
import { LoaderProps } from './types'

const Loader = (props: LoaderProps) => {
  const { size = 'large', type = 'lite' } = props
  return (
    <div className={`loader loader--${type} loader--${size}`}>
      <span className="loader__inner"></span>
    </div>
  )
}

export default Loader
