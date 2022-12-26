import React, { useState } from 'react'
import { Switcher as SwitcherComp } from '../index'

export default {
  title: 'Switcher',
  component: SwitcherComp,
  argTypes: {}
}
const ID = 'am_custom_switcher'

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(args.isChecked)
  return (
    <div>
      <SwitcherComp {...args} id={ID} />
      <label htmlFor={ID} onClick={() => setIsChecked(!isChecked)}>
        My swicther
      </label>
    </div>
  )
}

export const Switcher = Template.bind({})

Switcher.args = {
  label: 'My switcher',
  isChecked: false,
  backgroundColor: 'textBlack'
}
