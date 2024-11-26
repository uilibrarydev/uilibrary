import type { LegacyRef, ReactElement } from 'react'
import React from 'react'
import classnames from 'classnames'
import { Text } from '../../../../Text'
import { IconCaretDownFilled, IconCaretUpFilled } from '../../../../SVGIcons'

type TProps = {
  buttonText: string
  size?: 'small' | 'medium' | 'large'
  className?: string
  disabled?: boolean
  dataId?: string
  onClick: () => void
  refHandler?: LegacyRef<HTMLButtonElement> | undefined
  selectedItemsLabels: string
  isOpen?: boolean
  type?: 'primary' | 'secondary' | 'tertiary'
}

export const Button = (props: TProps): ReactElement => {
  const {
    type,
    buttonText,
    size = 'large',
    className = '',
    isOpen,
    disabled,
    dataId = '',
    onClick,
    refHandler = null,
    selectedItemsLabels
  } = props

  return (
    <button
      type="button"
      ref={refHandler}
      data-id={dataId}
      disabled={disabled}
      className={classnames('btn', `btn--${type}`, `btn--${size}`, `btn--${size}`, className)}
      onClick={onClick}
    >
      <>
        <Text className="btn__text mr-4" type={selectedItemsLabels ? 'tertiary' : 'secondary'}>
          {`${buttonText}${selectedItemsLabels ? '  |' : ''}`}
        </Text>

        {selectedItemsLabels ? <Text className="btn__text ml-4">{selectedItemsLabels}</Text> : null}
        {isOpen ? <IconCaretUpFilled size="xsmall" /> : <IconCaretDownFilled size="xsmall" />}
      </>
    </button>
  )
}
