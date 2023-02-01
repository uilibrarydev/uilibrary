import React from 'react'
import { TRadioProps } from './types'
import '../../assets/styles/components/_controllers.scss'

export const Radio = (props: TRadioProps): JSX.Element | null => {
  const {
    label = 'jsjsjjs',
    justIcon,
    disabled,
    name,
    setFieldValue,
    selectedValue,
    value,
    className,
    onClick
  } = props
  const isChecked = !!value || selectedValue

  const clickHandler = () => {
    if (name && setFieldValue) {
      setFieldValue(name, !isChecked)
    }
    if (onClick) {
      onClick(!isChecked)
    }
  }

  return (
    <div
      className={`controller controller--radio 
                        ${className} 
                        ${disabled && 'controller--disabled'}
                        `}
      onClick={clickHandler}
    >
      <span
        role="radio"
        aria-checked={isChecked}
        tabIndex={0}
        className={`controller__icon ${isChecked ? 'checked' : ''}`}
      ></span>
      {!justIcon && label && <span className="controller__label">{label}</span>}
    </div>
  )
}

export default Radio
