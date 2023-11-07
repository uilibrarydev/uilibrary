import React, { useState } from 'react'
import { Input as InputComp } from '../components'
import {Icon, Popover} from '../index'

export default {
  title: 'Input',
  component: InputComp,
  argTypes: {
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' }
    }
  }
}
const Template = (args) => {
  const [value, setValue] = useState('')
  const [isErrorVisible, setIsErrorVisible] = useState(false)
  const changeHandler = (e: TChangeEventType) => {
    setValue(e.target.value)
    setIsErrorVisible(true)
  }

  return (
    <div style={{ maxWidth: 300 }}>
      <InputComp
        {...args}
        error={!value && isErrorVisible ? 'requeired field' : ''}
        currentValue={value}
        onChange={changeHandler}
      />
    </div>
  )
}

export const Input = Template.bind({})
Input.args = {
  type: 'text',
  label: 'Some text',
  size: 'large',
  leftIconProps: {
    name: 'info'
  },
  rightIconProps: {},
  disabled: false,
  required: true,
  maxCount: 15,
  placeholder: 'Some text',
  labelAddons:  <Popover
      link={'dasd'}
      id="beneficiary-tooltip"
      text={'data'}
      position="top-center"
  >
    <div id="beneficiary-tooltip" className="info-tooltip__icon">
      <Icon name="info" type="information" size="small" />
    </div>
  </Popover>
  // helperText: 'This is your helper text'
  // successMessage: 'Success message'
}
