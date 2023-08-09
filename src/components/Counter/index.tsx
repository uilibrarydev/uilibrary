import React from 'react'
import { Icon } from '../index'
import { ICounterProps } from './types'

import './index.scss'
import ErrorMessage from '../../helperComponents/ErrorMessage'
import Label from '../../helperComponents/Label'
import classNames from 'classnames'
import { noop } from '../../utils'

const Counter = (props: ICounterProps): JSX.Element => {
  const {
    max = 99999999,
    min = 0,
    handleChange,
    value,
    name,
    counter = 0,
    setFieldValue,
    customError,
    label,
    required = false
  } = props

  const counterValue = value ? (value as number) : counter

  const customChangeHandler = (value: number) => {
    if (value < min) {
      return
    }
    if (handleChange) {
      handleChange(value)
    }

    if (setFieldValue && name) {
      setFieldValue(name, value, { shouldValidate: false })
    }
  }

  const onInputChange = (e: TChangeEventType) => {
    const inputValue = parseInt(e.target.value)
    if (inputValue > max) {
      return
    }

    customChangeHandler(inputValue)
  }

  const increase = () => customChangeHandler(counterValue - 1)
  const decrease = () => customChangeHandler(counterValue + 1)

  const isIncreaseIconDisabled = counterValue <= min

  const isDecreaseIconDisabled = !counterValue || counterValue >= max
  return (
    <div className="counter">
      {label ? <Label text={label} required={required} /> : null}
      <div className="counter-container">
        <Icon
          size="small"
          name="minus"
          className={classNames({ action_active: !isIncreaseIconDisabled })}
          onClick={isIncreaseIconDisabled ? noop : increase}
          type={isIncreaseIconDisabled ? 'disabled' : 'primary'}
        />
        <input
          type="number"
          name={name}
          value={isNaN(counterValue) ? '' : counterValue}
          onChange={onInputChange}
        />
        <Icon
          name="add"
          size="small"
          className={classNames({ action_active: !isDecreaseIconDisabled })}
          onClick={isDecreaseIconDisabled ? noop : decrease}
          type={isDecreaseIconDisabled ? 'disabled' : 'primary'}
        />
      </div>
      {customError ? <ErrorMessage message={customError} /> : null}
    </div>
  )
}

export default Counter
