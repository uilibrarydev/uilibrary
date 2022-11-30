import React from 'react'
import { TButtonPropTypes } from './types'

const Button = (props: TButtonPropTypes): JSX.Element => {
  const { buttonText, type, onClick } = props
  console.log('type', type)

  return <button onClick={onClick}>{buttonText}</button>
}

export default Button
