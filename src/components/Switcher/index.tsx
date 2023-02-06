import React, {useRef} from 'react'
import { TSwitcherProps } from './types'
import '../../assets/styles/components/_controllers.scss'
import Icon from '../Icon'

export const Switcher = React.forwardRef<HTMLDivElement, TSwitcherProps>(
  (
    {
      onClick,
      id = '',
      name,
      value,
      disabled,
      size,
      setFieldValue,
      selectedValue,
      className = '',
    },
    ref
  ): JSX.Element => {
    const isChecked = !!value || selectedValue
    const inputRef = useRef(null)
    const changeHandler = () => {
      setFieldValue(!selectedValue)

      if (name && setFieldValue) {
        setFieldValue(name, !isChecked, { shouldValidate: !isChecked })
      }
      if (onClick) {
        onClick(!isChecked)
      }
    }

    return (
      <label
        id={id}
        className={`controller controller--switch controller--switch-${size} 
                    ${className}
                    ${disabled ? 'controller--disabled' : ''} 
                    `}
      >
        <input
            type="checkbox"
            tabIndex={0}
            onChange={changeHandler}
            checked={selectedValue}
            ref={inputRef}
            disabled={disabled}
        />
        <span className="controller__icon">
          <span  className="controller__icon__inner">
              {selectedValue ? (
                  <Icon name="mark" size="xsmall" />
              ) : null}
          </span>
        </span>
      </label>
    )
  }
)

Switcher.displayName = 'Switcher'
export default Switcher
