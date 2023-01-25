import React from 'react'
import { Input as InputComp } from '../components'

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
// const Template = (): JSX.Element => {
//   const [value, setValue] = useState('')
//   const [error, setError] = useState('')
//
//   const onChange = (e: TChangeEventType) => {
//     const _value = e.target.value
//     setValue(_value)
//
//     if (_value.length < 5) {
//       setError('Inputed value is too short')
//     } else {
//       if (error) {
//         setError('')
//       }
//     }
//   }
//
//   return (
//       <InputComp
//         value={value}
//         changeHandler={onChange}
//         label="Label"
//         mask=""
//       />
//   )
// }

const Template = (args) => <InputComp {...args} />

export const Input = Template.bind({})
Input.args = {
  iconProps: {
    name: 'close'
  },
  label: 'Label',
  size: 'large',
  leftIcon: false,
  rightIcon: false,
  disabled: false,
  required: false,
  valid: false,
  error: 'This is your helper text'
}
