import React, { useState } from 'react'
import { Tooltip as TooltipComp } from '../components'

export default {
  title: 'Tooltip',
  component: TooltipComp,
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
    },
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => {
  // const [elemRef, setelemRef] = useState<HTMLElement | null>(null)
  return (
    <TooltipComp {...args} id="ooooo">
      <div
        id="ooooo"
        style={{
          width: 100,
          position: 'absolute',
          top: 200,
          left: 400
        }}
        // ref={setelemRef}
      >
        Hover on me
      </div>
    </TooltipComp>
  )
}

export const Tooltip = Template.bind({})
const Test = ()=> {
    return <div>
        <div>sadad</div>
        <div>sadad</div>
        <div>sadad</div>
    </div>
}

Tooltip.args = {
  text: Test,
  // position: 'top-right',
  size: 'large'
}
