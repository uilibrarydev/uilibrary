import React, { useState } from 'react'
import './index.scss'
import { useOnOutsideClick } from '../../hooks'

const SideSheet: React.FC<SiteSheetProps> = ({
  isOpen,
  onClose,
  position = 'left',
  children
}: SiteSheetProps) => {
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)

  useOnOutsideClick(containerRef, onClose)

  return (
    <div className={`site-sheet ${isOpen ? 'open' : ''}`} ref={setContainerRef}>
      <div className="site-sheet-content">{children}</div>
      <button className="site-sheet-close" onClick={onClose}>
        Close
      </button>
    </div>
  )
}

export default SideSheet
