import React, { useState } from 'react'
import { Checkbox as CheckboxComp } from '../components'
import { TCheckboxProps } from '../components/Checkbox/types'
import { noop } from '../utils'

export default {
  title: 'Checkbox',
  component: CheckboxComp,
  argTypes: {
    value: {
      options: ['true', 'false'],
      control: { type: 'true' }
    }
  }
}

export const Template = (args: TCheckboxProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState(args.selectedValue)

  const clickHandler = () => {
    setIsChecked((_isChecked) => !_isChecked)
  }

  return (
    <div>
      <CheckboxComp {...args} selectedValue={isChecked} onClick={clickHandler} />
    </div>
  )
}

export const Checkbox = Template.bind({})

Checkbox.args = {
  iconProps: { name: 'close', size: 'xSmall', color: 'justWhite' },
  value: true,
  onClick: noop
}
