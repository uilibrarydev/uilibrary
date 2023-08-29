import React, { forwardRef } from 'react'
import { Input } from '../index'
import { ICounterProps } from './types'

import './index.scss'

import classNames from 'classnames'
import { noop } from '../../utils'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Counter = forwardRef((props: ICounterProps, ref): JSX.Element => {
  const {
    max = 99999999,
    min = 0,
    handleChange,

    name,
    counter = 0,
    setFieldValue,
    customError,
    label,
    required = false,
    value,
    hasError = false,
    ...rest
  } = props

  const counterValue = value !== undefined ? parseInt(value as string) : counter

  const isFormField = value !== undefined

  const customChangeHandler = (inputedValue: number | string) => {
    if (handleChange) {
      handleChange(inputedValue)
    }

    if (setFieldValue && name) {
      setFieldValue(name, inputedValue, { shouldValidate: hasError })
    }
  }

  const increase = () => customChangeHandler(counterValue - 1)
  const decrease = () => customChangeHandler(counterValue + 1)
  const onInputChange = (e: TChangeEventType) => customChangeHandler(parseInt(e.target.value))

  const isIncreaseIconDisabled = counterValue <= min

  const isDecreaseIconDisabled = counterValue === undefined || counterValue >= max

  return (
    <Input
      {...rest}
      className="counter"
      error={isFormField ? '' : customError}
      label={label}
      required={required}
      leftIconProps={{
        size: 'small',
        name: 'minus',
        className: classNames({ action_active: !isIncreaseIconDisabled }),
        type: isIncreaseIconDisabled ? 'disabled' : 'primary',
        onClick: isIncreaseIconDisabled ? noop : increase
      }}
      rightIconProps={{
        name: 'add',
        size: 'small',
        className: classNames({ action_active: !isDecreaseIconDisabled }),
        onClick: isDecreaseIconDisabled ? noop : decrease,
        type: isDecreaseIconDisabled ? 'disabled' : 'primary'
      }}
      type="number"
      name={name}
      value={counterValue}
      onChange={onInputChange}
    />
  )
})

Counter.displayName = 'Counter'
export default Counter
