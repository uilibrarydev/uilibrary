/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ReactElement, useState } from 'react'
import { Avatar, Button, NavigationItem, SideNavigation as _SideNavigation, Text } from '../index'
import { Block } from '../components/SideNavigation/Block'
import { NavigationItemTypes } from '../components/SideNavigation/NavigationItem/types'
// @ts-ignore
import logo from '../assets/images/logo.svg'
// @ts-ignore
import logoClosed from '../assets/images/logo-closed.svg'
// @ts-ignore
import avatar from '../assets/images/avatar.jpg'
import IconDocument from '../components/SVGIcons/IconDocument'
import IconLockClosed from '../components/SVGIcons/IconLockClosed'
import IconSettings from '../components/SVGIcons/IconSettings'
import IconHome from '../components/SVGIcons/IconHome'
import IconSavings from '../components/SVGIcons/IconSavings'
import IconWallet from '../components/SVGIcons/IconWallet'
import IconAlertBadge from '../components/SVGIcons/IconAlertBadge'
import IconMail from '../components/SVGIcons/IconMail'
import IconArrowExit from '../components/SVGIcons/IconArrowExit'
import { StoryFn } from '@storybook/react'
import { TSideNavigationPropTypes } from '../components/SideNavigation/types'

export default {
  title: 'Side Navigation',
  component: _SideNavigation,
  argTypes: {
    showAction: {
      options: [true, false]
    }
  }
}

const Template: StoryFn<TSideNavigationPropTypes> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
    <_SideNavigation  {...args} setOpen={setIsOpen} open={isOpen}>
      <main>
        <NavigationItem
          As={() => (
            <a href="/https://ameriabank.am">
              <img src={isOpen ? logo : logoClosed} alt="Product Logo" />
            </a>
          )}
          type={NavigationItemTypes.BLOCK_HEADER}
          isOpen={isOpen}
          showAction={args.showAction}
          actionElm={args.actionElm}
        />
        <Block open={isOpen} label="Finance">
          <>
            <NavigationItem
              As={() => (
                <a href="/https://ameriabank.am">
                  <IconDocument />
                  <div>Accounts</div>
                </a>
              )}
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
              showAction={args.showAction}
              actionElm={args.actionElm}
              active
            />
            <NavigationItem
              As={() => (
                <a href="/https://ameriabank.am">
                  <IconLockClosed />
                  <div>Test</div>
                </a>
              )}
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
              showAction={args.showAction}
              actionElm={args.actionElm}
            />
            <NavigationItem
              As={() => (
                <div>
                  <IconHome />
                  <div>Cards</div>
                </div>
              )}
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
              expandable
            >
              <>
                <NavigationItem
                  As={() => (
                    <a href="/https://ameriabank.am">
                      <IconDocument />
                      <div>Accounts</div>
                    </a>
                  )}
                  type={NavigationItemTypes.SUB}
                  isOpen={isOpen}
                />
                <NavigationItem
                  As={() => (
                    <a href="/https://ameriabank.am">
                      <IconSavings />
                      <div>Savings</div>
                    </a>
                  )}
                  type={NavigationItemTypes.SUB}
                  isOpen={isOpen}
                />
                <NavigationItem
                  As={() => (
                    <a href="/https://ameriabank.am">
                      <IconWallet />
                      <div>Overdraft</div>
                    </a>
                  )}
                  type={NavigationItemTypes.SUB}
                  isOpen={isOpen}
                />
              </>
            </NavigationItem>
            <NavigationItem
              As={() => (
                <a href="/https://ameriabank.am">
                  <IconSavings />
                  <div>Savings</div>
                </a>
              )}
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
              showBadge
              badgeContent={'888+'}
            />
          </>
        </Block>
        <Block open={isOpen} label="Finance">
          <>
            <NavigationItem
              As={() => (
                <a href="/https://ameriabank.am">
                  <IconWallet />
                  <div>Overdraft</div>
                </a>
              )}
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
            />
            <NavigationItem
              As={() => (
                <a href="/https://ameriabank.am">
                  <IconHome />
                  <div>Mortgage</div>
                </a>
              )}
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
            />
            <NavigationItem
              As={() => (
                <div>
                  <IconSavings />
                  <div>Car Leon</div>
                </div>
              )}
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
              expandable
            >
              <>
                <NavigationItem
                  As={() => (
                    <a href="/https://ameriabank.am">
                      <IconSavings />
                      <div>Savings</div>
                    </a>
                  )}
                  type={NavigationItemTypes.SUB}
                  isOpen={isOpen}
                />
                <NavigationItem
                  As={() => (
                    <a href="/https://ameriabank.am">
                      <IconDocument />
                      <div>Accounts</div>
                    </a>
                  )}
                  type={NavigationItemTypes.SUB}
                  isOpen={isOpen}
                />
              </>
            </NavigationItem>
          </>
        </Block>
      </main>
      <footer>
        <Block>
          <>
            <NavigationItem
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
              As={() => (
                <a href="/https://ameriabank.am">
                  <IconMail />
                  <div>Messages</div>
                </a>
              )}
            />
            <NavigationItem
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
              As={() => (
                <a href="https://ameriabank.am">
                  <IconAlertBadge />
                  <div>Notifications</div>
                </a>
              )}
            />
            <NavigationItem
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
              As={() => (
                <a href="https://ameriabank.am">
                  <IconSettings />
                  <div>Settings</div>
                </a>
              )}
            />
            <NavigationItem
              type={NavigationItemTypes.USER}
              isOpen={isOpen}
              As={() => (
                <div onClick={() => alert()}>
                  <Avatar imagePath={avatar} size={isOpen ? 'small' : 'xsmall'} />
                  <Text size="medium">Zhorzhik Grigoryan</Text>
                  <IconArrowExit />
                </div>
              )}
            />
          </>
        </Block>
      </footer>
    </_SideNavigation>
  )
}

export const SideNavigation = Template.bind({})

// @ts-ignore
SideNavigation.args = {
  showAction: true,
  actionElm: <Button buttonText={'Action'} size="large" iconProps={{ Component: IconHome }} />
}
