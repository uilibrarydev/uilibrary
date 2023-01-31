import React from 'react'
import Icon from '../Icon'
import { TCheckboxProps } from './types'
import './index.scss'

export const Checkbox = (props: TCheckboxProps): JSX.Element | null => {
  const {
    label = 'jsjsjjs',
    justIcon,
    disabled,
    required = true,
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
      setFieldValue(name, !isChecked, { shouldValidate: !isChecked })
    }
    if (onClick) {
      onClick(!isChecked)
    }
  }

  return (
    <div
      className={`controller controller--checkbox 
                        ${className} 
                        ${disabled && 'controller--disabled'}
                        `}
      onClick={clickHandler}
    >
      <span
        role="checkbox"
        aria-checked={isChecked}
        tabIndex={0}
        className={`controller__icon ${isChecked ? 'checked' : ''}`}
      >
        {isChecked && <Icon name="tick" size="xxSmall" />}
      </span>
      {!justIcon && label && (
        <span className="controller__label">
          {label}
          {required && <sup>*</sup>}
        </span>
      )}
    </div>
  )
}

export default Checkbox
