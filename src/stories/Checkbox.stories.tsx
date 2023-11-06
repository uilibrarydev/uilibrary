import React, { useState } from 'react'
import { Checkbox as CheckboxComp } from '../components'

export default {
  title: 'Checkbox',
  component: CheckboxComp,
  argTypes: {}
}

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(false)

  return <CheckboxComp {...args} selectedValue={isChecked} onClick={setIsChecked} />
}

export const Checkbox = Template.bind({})

Checkbox.args = {
  dataId: 'dadas',
  disabled: false,
  required: false,
  label: 'Label for checkbox',
  beforeLink: 'das',
  afterLink: 'dasdsa',
  link: 'https://ameriabank.am/Portals/0/files/Business/General/SME_Ecosystem_Text_of_agreements.pdf'
}
