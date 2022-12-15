import React from 'react'
import Icon from '../Icon'
import './index.scss'

export const Checkbox = React.forwardRef<HTMLDivElement, TCheckboxProps>(
  ({ label, name, setFieldValue, value, onClick, ...rest }, ref): JSX.Element => {
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
      <div className="custom_checkbox_container" onClick={clickHandler} ref={ref} {...rest}>
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
)

Checkbox.displayName = 'Checkbox'
export default Checkbox
