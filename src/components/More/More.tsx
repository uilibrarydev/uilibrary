import React, { useState } from 'react'
import { Text } from '../Text'
import { TMorePropTypes } from './types'
import { Button } from '../Button'
import classNames from 'classnames'
import './styles.scss'

export const More = (props: TMorePropTypes): JSX.Element => {
  const {
    textProps = {},
    expandedText,
    collapsedText,
    buttonText = {
      expand: 'Ավելին',
      collapse: 'Փակել'
    }
  } = props
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
    <Text {...textProps} className="info_with_more_button">
      {`${isExpanded ? expandedText : collapsedText}`}
      <Button
        className={classNames('more-button', { 'ml-8': !!collapsedText || isExpanded })}
        type="text"
        buttonText={isExpanded ? buttonText.collapse : buttonText.expand}
        onClick={isExpanded ? collapse : expand}
      />
    </Text>
  )
}
