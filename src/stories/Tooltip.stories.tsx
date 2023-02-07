import React, {useState} from 'react'
import {Tooltip as TooltipComp} from '../components'

export default {
    title: 'Tooltip',
    component: TooltipComp,
    argTypes: {
        position: {
            options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right', 'middle-left', 'middle-right'],
            control: {type: 'radio'}
        },
        size: {
            options: ['large', 'medium', 'small'],
            control: {type: 'radio'}
        }
    }
}


const Template = (args) => {
    const [isHovered, setHoverState] = useState(true)

    const onMouseEnter = () => setHoverState(true)
    const onMouseLeave = () => setHoverState(true)

    return (
        <span style={{position: 'relative', margin: '30px 100px', display: 'inline-block'}} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            Hover on me
            {isHovered ? (
                <TooltipComp {...args} />
            ) : null}
        </span>
    )
}

export const Tooltip = Template.bind({})

Tooltip.args = {
    text: 'Prompt text',
    position: 'top-left',
    size: 'large',
}
