import React, { useState } from 'react'
import Button from '../../Button'
import Menu from '../../Menu'
import Text from '../../Text'

import { TMenuItem } from '../../Menu/types'

type TProps = {
  selectActions: TMenuItem[]
  innerLabel?: string
  hasBottomSpace?: boolean
}
export const Actions = (props: TProps): JSX.Element | null => {
  const { selectActions, innerLabel, hasBottomSpace = true } = props

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [buttonRef, setButtonRef] = useState<HTMLDivElement | null>(null)

  const open = () => setIsMenuOpen(true)
  const close = () => setIsMenuOpen(false)

  return selectActions.length ? (
    <div className="action-bar">
      {innerLabel ? (
        <Text size="xsmall" type="secondary" className="action-bar__label">
          {innerLabel}
        </Text>
      ) : null}
      <div ref={setButtonRef} className="action-bar__right">
        <Button type="tertiary" onClick={open} iconProps={{ name: 'more' }} size="small" />
        {buttonRef ? (
          <Menu
            menuItems={selectActions}
            parentRef={buttonRef}
            onClose={close}
            position="bottom-left"
            isOpen={isMenuOpen}
          />
        ) : null}
      </div>
    </div>
  ) : null
}
