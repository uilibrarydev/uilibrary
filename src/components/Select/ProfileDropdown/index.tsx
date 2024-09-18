import React, { useId, useRef } from 'react'
import { TProfileDropdownProps } from '../types'
import './styles.scss'
import { Text } from '../../Text'
import { useOnOutsideClick } from '../../../hooks'

export const ProfileDropdown = (props: TProfileDropdownProps): JSX.Element => {
  const menuRef = useRef<HTMLDivElement>(null)
  const { avatar, name, email, bodyItems, footerItems } = props
  const [isOpen, setIsOpen] = React.useState(false)

  const closeDropdown = () => setIsOpen(false)
  useOnOutsideClick(menuRef.current, closeDropdown, isOpen, useId())

  return (
    <div ref={menuRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{avatar}</div>
      {isOpen && (
        <div className="profile-dropdown-menu">
          <div className="profile-dropdown-menu-header">
            {avatar}
            <div>
              <Text size={'medium'} weight={'bold'}>
                {name}
              </Text>
              <Text size={'small'} type={'secondary'}>
                {email}
              </Text>
            </div>
          </div>
          <div className="profile-dropdown-menu-items">
            <ul className={'body'}>
              {bodyItems?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {footerItems?.length ? (
              <ul className={'footer'}>
                {footerItems?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      )}
    </div>
  )
}
