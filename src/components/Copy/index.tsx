import React, { useState, useRef, ReactElement } from 'react'
import Button from '../Button'
import { Popover } from '../Popover'
import './index.scss'

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
    <div ref={copyIconRef} className="copy-icon">
      <Button
        type={'tertiary'}
        iconProps={{ name: 'copy' }}
        size={'small'}
        className={className}
        onClick={copy}
      />
      {isTooltipVisibile ? (
        <Popover
          clicked
          elemRef={copyIconRef.current as HTMLElement}
          text="Copied"
          position={'top-center'}
        />
      ) : null}
    </div>
  )
}
