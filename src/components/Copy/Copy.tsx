import React, { useState, useRef, ReactElement } from 'react'
import { Button } from '../Button'
import { Popover } from '../Popover'
import { TCopyProps } from './types'
import { IconCopy } from '../SVGIcons/IconCopy'

export const Copy = ({ textAfterCopy, className = '', text, dataId }: TCopyProps): ReactElement => {
  const [isTooltipVisible, setTooltipVisibility] = useState(false)
  const copyIconRef = useRef<HTMLDivElement | null>(null)
  const copy = (e: TClickEventType) => {
    e.stopPropagation()
    navigator.clipboard.writeText(text)
    setTooltipVisibility(true)
    setTimeout(() => setTooltipVisibility(false), 3000)
  }

  return (
    <div ref={copyIconRef} className="copy-icon">
      <Button
        dataId={dataId}
        type="tertiary"
        iconProps={{ Component: IconCopy }}
        size="small"
        className={className}
        onClick={copy}
      />
      {isTooltipVisible ? (
        <Popover
          clicked
          elemRef={copyIconRef.current as HTMLElement}
          text={textAfterCopy || 'Copied'}
          position={'top-center'}
        />
      ) : null}
    </div>
  )
}
