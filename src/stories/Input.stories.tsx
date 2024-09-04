import React, { useState } from 'react'
import { Input as _Input, Popover } from '../index'
import IconInfo from '../components/SVGIcons/IconInfo'
import { StoryFn } from '@storybook/react'
import { InputCustomProps } from '../components/Input/types'

export default {
  title: 'Input',
  component: _Input,
  argTypes: {
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' }
    }
  }
}
const Template: StoryFn<InputCustomProps> = (args) => {
  const [value, setValue] = useState('')
  const [isErrorVisible, setIsErrorVisible] = useState(false)
  const changeHandler = (e: TChangeEventType, value: string) => {
    setValue(value)
    setIsErrorVisible(true)
  }

  return (
    <div style={{ maxWidth: 300 }}>
      <_Input
        {...args}
        witUpperCase={true}
        error={!value && isErrorVisible ? 'requeired field' : ''}
        currentValue={value}
        handleChange={changeHandler}
      />
    </div>
  )
}

export const Input = Template.bind({})

Input.args = {
  type: 'text',
  label: 'Some text',
  size: 'large',
  mask: '',
  maskChar: '',
  leftIconProps: {
    Component: IconInfo
  },
  rightIconProps: {},
  disabled: false,
  required: true,
  maxCount: 15,
  placeholder: 'Some text',
  labelAddons: (
    <Popover
      linkAddons={{ url: 'link', beforeLink: 'text before link' }}
      id="beneficiary-tooltip"
      text={'data'}
      position="top-center"
    >
      <div id="beneficiary-tooltip">
        <IconInfo type="information" size="xsmall" className={'ml-4 pointer'} />
      </div>
    </Popover>
  ),
  helperText: 'This is your helper text',
  successMessage: 'Success message'
}
