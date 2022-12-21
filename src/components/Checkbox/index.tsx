import React from 'react'
import Icon from '../Icon'
import './index.scss'

export const Checkbox = (props: TCheckboxProps): JSX.Element => {
  const { label, name, setFieldValue, value, onClick, ...rest } = props
  const isChecked = value
  const clickHandler = () => {
    if (name && setFieldValue) {
      setFieldValue(name, !isChecked)
    }
    if (onClick) {
      onClick(!isChecked)
    }
  }

  return (
    <div className="custom_checkbox_container" onClick={clickHandler} {...rest}>
      <div
        role="checkbox"
        aria-checked={isChecked}
        tabIndex={0}
        className={`custom_checkbox_container_content ${isChecked ? 'checked' : ''}`}
      >
        <div className={'custom_checkbox_container_icon '}>
          {isChecked && <Icon name="tick" color="justWhite" size="xxSmall" />}
        </div>
      </div>
      {label}
    </div>
  )
}

export default Checkbox
