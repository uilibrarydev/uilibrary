import React, { useState } from 'react'
import { Text } from '../Text'
import { TMorePropTypes } from './types'


export const More = (props: TMorePropTypes): JSX.Element => {
  const { expandedText, collapsedText } = props
  const [isExpanded, setIsExpanded] = useState(false)

  const expand = (e: TClickEventType) => {
    e.stopPropagation()
    setIsExpanded(true)
  }
  const collapse = (e: TClickEventType) => {
    e.stopPropagation()
    setIsExpanded(false)
  }

  return (
    <Text>
      <>
        {`${isExpanded ? expandedText : collapsedText}`}
        <span className="expand_button" onClick={isExpanded ? collapse : expand}>
          {isExpanded ? ' Փակել' : ' Ավելին'}
        </span>
      </>
    </Text>
  )
}
