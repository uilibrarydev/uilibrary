import React, { useState } from 'react'
import Text from '../Text'

import { TMorePropTypes } from './types'
import './index.scss'

const More = (props: TMorePropTypes): JSX.Element => {
  const { expandedText, collapsedText } = props
  const [isExpanded, setIsExpanded] = useState(false)

  const expand = (e: TEventType) => {
    e.stopPropagation()
    setIsExpanded(true)
  }
  const collapse = (e: TEventType) => {
    e.stopPropagation()
    setIsExpanded(false)
  }

  return (
    <Text>
      <>
        {`${isExpanded ? expandedText : collapsedText}`}
        <span className="expand_button" onClick={isExpanded ? collapse : expand}>
          {isExpanded ? 'Փակել' : 'Ավելին'}
        </span>
      </>
    </Text>
  )
}

export default More
