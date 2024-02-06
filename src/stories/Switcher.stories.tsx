import React, { useState } from 'react'
import { Icon, Switcher as _Switcher } from '../index'

export default {
  title: 'Switcher',
  component: _Switcher,
  argTypes: {
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' }
    }
  }
}
const ID = 'am_custom_switcher'

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(false)
  return <_Switcher {...args} selectedValue={isChecked} onClick={setIsChecked} id={ID} />
}

export const Switcher = Template.bind({})

Switcher.args = {
  size: 'small',
  disabled: false,
  label: 'label',
  labelAddons: <Icon name={'info'} size={'xsmall'} type={'information'} className={'ml-4'} />
}
