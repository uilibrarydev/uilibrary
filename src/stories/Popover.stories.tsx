import React, { useState } from 'react'
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
  const [ref, setRef] = useState<HTMLElement | null>(null)
  return (
    <PopoverComp {...args} elemRef={ref}>
      <div
        ref={setRef}
        style={{
          position: 'absolute',
          left: 300,
          top: 300,
          width: 100,
          height: 50,
          background: 'red'
        }}
      >
        Click on me
      </div>
    </PopoverComp>
  )
}

export const Popover = Template.bind({})

Popover.args = {
  text: 'Lorem ipsum dolor sit amet. Ea accusamus laboriosam sit sintEa accusamus laboriosam sit sint expedita et numquam sunt. A sunt assumenda id quos sequi qui eius nulla. Est saepe dolorem qui nemo enim id velit voluptas.Est saepe dolorem qui nemo enim id velit voluptas.Est saepe dolorem qui nemo enim id velit voluptas.Est saepe dolorem.'
}
