import React, { useState } from 'react'
import { Input as _Input, Popover, InputPassword as _InputPassword } from '../index'
import IconInfo from '../components/SVGIcons/IconInfo'
import { StoryFn } from '@storybook/react'
import { InputCustomProps, type InputPasswordsProps } from '../components/Input/types'
import IconCalendarRight from '../components/SVGIcons/IconCalendarRight'

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

const passwordValidations = [
  { label: 'At least 8 characters', test: (pwd: string) => pwd.length >= 8 },
  { label: 'At least one uppercase letter', test: (pwd: string) => /[A-Z]/.test(pwd) },
  { label: 'At least one lowercase letter', test: (pwd: string) => /[a-z]/.test(pwd) },
  { label: 'At least one number', test: (pwd: string) => /\d/.test(pwd) },
  { label: 'At least one special character', test: (pwd: string) => /[^a-zA-Z0-9]/.test(pwd) }
]

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
        type={'text'}
        error={!value && isErrorVisible ? 'requeired field' : ''}
        currentValue={value}
        handleChange={changeHandler}
      />
    </div>
  )
}

export const Input = Template.bind({})

const InputPasswordTemplate: StoryFn<InputPasswordsProps> = (args) => {
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false)

  // @ts-ignore
  return (
    <div style={{ maxWidth: 400 }}>
      <_InputPassword
        validations={passwordValidations}
        onValidationChange={setIsPasswordValid}
        label={'Password'}
        placeholder={'Create password'}
        hasError={false}
      />
    </div>
  )
}
export const InputPassword = InputPasswordTemplate.bind({})

Input.args = {
  type: 'text',
  label: 'Some text',
  size: 'large',
  mask: '',
  maskChar: '',
  leftIconProps: {
    Component: IconInfo
  },
  rightIconProps: {
    Component: IconCalendarRight
  },
  disabled: false,
  required: true,
  maxCount: 15,
  witUpperCase: false,
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

InputPassword.args = {}
