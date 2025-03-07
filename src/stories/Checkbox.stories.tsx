import React, { useState } from 'react'
import { Checkbox as _Checkbox } from '../index'
import { StoryFn } from '@storybook/react'
import { TCheckboxProps } from '../components/Checkbox/types'

export default {
  title: 'Checkbox',
  component: _Checkbox,
  argTypes: {}
}

const Template: StoryFn<TCheckboxProps> = (args) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <_Checkbox
      {...args}
      selectedValue={isChecked}
      onClick={setIsChecked}
      popoverAddons={{
        id: 'some-id',
        text: 'hello-popover',
        dataId: 'test'
      }}
    />
  )
}

export const Checkbox = Template.bind({})

Checkbox.args = {
  dataId: 'id',
  disabled: false,
  required: false,
  isInvalid: true,
  label: 'Label for checkbox',
  link: '/about',
  beforeLink: 'das',
  afterLink: 'after-link',
  helperText: 'helper text'
}
