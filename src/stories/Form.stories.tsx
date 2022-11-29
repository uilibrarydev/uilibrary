import React from 'react'
import { firstNameValidation } from '../validations'
import Input from '../components/Input'
import { Form as FormComp } from '../components'

export default {
  title: 'Form',
  component: FormComp
}

const FORM_ITEMS: TFormItem[] = [
  {
    component: Input,
    placeholder: 'firs tName',
    name: 'firstName'
  }
]

export interface IupdateOpenedChatParams {
  firstName: string
}

const Template = (): JSX.Element => {
  return <FormComp formItems={FORM_ITEMS} validationScheme={firstNameValidation} />
}
export const Form = Template.bind({})
