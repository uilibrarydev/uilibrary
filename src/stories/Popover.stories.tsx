import React from 'react'
import { Popover as PopoverComp } from '../components'

export default {
  title: 'Popover',
  component: PopoverComp,
  argTypes: {
    position: {
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
        'middle-left',
        'middle-right'
      ],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => {
  return (
    <>
      <PopoverComp {...args} id="sss" />
      <div
        style={{
          position: 'absolute',
          left: 300,
          top: 300,
          width: 100,
          height: 500,
          background: 'red'
        }}
      >
        <div id="sss"> Click on me</div>
      </div>
    </>
  )
}

export const Popover = Template.bind({})

Popover.args = {
  text: 'Lorem ipsum dolor sit amet. Ea accusamus laboriosam sit sintEa accusamus laboriosam sit sint expedita et numquam sunt. A sunt assumenda id quos sequi qui eius nulla. Est saepe dolorem qui nemo enim id velit voluptas.Est saepe dolorem qui nemo enim id velit voluptas.Est saepe dolorem qui nemo enim id velit voluptas.Est saepe dolorem.'
}
