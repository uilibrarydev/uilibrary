import React, { useState } from 'react'
import { Button, Menu, Text } from '../../../index'
import { TMenuItem } from '../../Menu/types'

type TProps = {
  selectActions: TMenuItem[]
  innerLabel?: string
}
export const Actions = (props: TProps): JSX.Element | null => {
  const { selectActions, innerLabel } = props

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [buttonRef, setButtonRef] = useState<HTMLDivElement | null>(null)

  const open = () => setIsMenuOpen(true)
  const close = () => setIsMenuOpen(false)

  return selectActions.length ? (
    <div className="action_field">
      {innerLabel ? (
        <Text size="xsmall" type="secondary">
          {innerLabel}
        </Text>
      ) : null}
      <div ref={setButtonRef}>
        <Button type="tertiary" onClick={open} iconProps={{ name: 'more' }} size="small" />
        {isMenuOpen && buttonRef ? (
          <Menu menuItems={selectActions} parentRef={buttonRef} onClose={close} />
        ) : null}
      </div>
    </div>
  ) : null
}
