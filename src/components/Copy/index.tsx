import React, { useState, useRef, ReactElement } from 'react'
import Icon  from '../Icon'
import { Popover } from '../Popover'

type Props = {
  className?: string
  text: string
}
export const Copy = ({ className = '', text }: Props): ReactElement => {
  const [isTooltipVisibile, setTooltipVisibility] = useState(false)
  const copyIconRef = useRef<HTMLDivElement | null>(null)
  const copy = () => {
    navigator.clipboard.writeText(text)
    setTooltipVisibility(true)
    setTimeout(() => setTooltipVisibility(false), 3000)
  }

  return (
    <div ref={copyIconRef}>
      <Icon name="mail" size="xsmall" className={className} onClick={copy} />
      {isTooltipVisibile ? (
        <Popover clicked elemRef={copyIconRef.current as HTMLElement} text="copied" />
      ) : null}
    </div>
  )
}
