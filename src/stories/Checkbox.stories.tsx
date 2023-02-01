import React, {useState} from 'react'
import { Checkbox as CheckboxComp } from '../components'
import { noop } from '../utils'

export default {
  title: 'Checkbox',
  component: CheckboxComp,
  argTypes: {}
}

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(false)
 return ( <CheckboxComp {...args} selectedValue={isChecked}  setFieldValue={setIsChecked}/>)
}

export const Checkbox = Template.bind({})

Checkbox.args = {
  disabled: false,
  required: false,
  label: 'Label for checkbox',
  onClick: noop
}
