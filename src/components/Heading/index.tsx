import React from 'react'
import {HeadingPropTypes} from './types'
import {noop} from '../../utils'
import './index.scss'


const Heading: React.FC<HeadingPropTypes> = (props: HeadingPropTypes) => {
    const {
        text,
        className = '',
        size,
        type:As = 'h1',
        weight,
        onClick = noop,

    } = props


    return (
        <As
            onClick={onClick}
            className={`heading heading-${size} ${weight} ${className}`}
        >
            {text}
        </As>
    )
}

export default Heading
