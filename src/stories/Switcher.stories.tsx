import React, {useState} from 'react'
import { Switcher as SwitcherComp } from '../index'
import { noop } from '../utils'

export default {
  title: 'Switcher',
  component: SwitcherComp,
  argTypes: {
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' }
    }
  }
}
const ID = 'am_custom_switcher'

// const Template = (args) => {
//   const [isChecked, setIsChecked] = useState(args.isChecked)
//   return (
//     <div>
//       <SwitcherComp {...args} isChecked={isChecked} onClick={setIsChecked} id={ID} />
//       <label htmlFor={ID} onClick={() => setIsChecked(!isChecked)}>
//         My swicther
//       </label>
//     </div>
//   )
// }

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(false)
  return <SwitcherComp {...args} selectedValue={isChecked} setFieldValue={setIsChecked} id={ID}/>
}

export const Switcher = Template.bind({})

Switcher.args = {
  size: 'small',
  disabled: false,
  onClick: noop
}
