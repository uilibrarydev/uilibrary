import React from 'react'
import { TRadioProps } from './types'
import '../../assets/styles/components/_controllers.scss'

export const Radio = (props: TRadioProps): JSX.Element | null => {
  const { name, label, disabled, setFieldValue, isSelected, value, className = '', onClick } = props
  const isChecked = !!value || isSelected

  const changeHandler = () => {
    if (name && setFieldValue) {
      setFieldValue(name, !isChecked, { shouldValidate: !isChecked })
    }
    if (onClick) {
      onClick(!isChecked)
    }
  }

  return (
    <label
      className={`controller controller--radio 
                ${className} 
                ${disabled ? 'controller--disabled' : ''}
                `}
    >
      <input
        type="radio"
        tabIndex={0}
        onChange={changeHandler}
        checked={isSelected}
        disabled={disabled}
      />
      <span className="controller__icon"></span>
      {label ? <span className="controller__label">{label}</span> : null}
    </label>
  )
}

export default Radio
