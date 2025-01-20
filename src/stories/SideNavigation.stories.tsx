/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ReactElement, useState } from 'react'
import { Avatar, Image, NavigationItem, SideNavigation as _SideNavigation, Text } from '../index'
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
import IconHome from '../components/SVGIcons/IconHome'
import IconSavings from '../components/SVGIcons/IconSavings'
import IconWallet from '../components/SVGIcons/IconWallet'
import { StoryFn } from '@storybook/react'
import { TSideNavigationPropTypes } from '../components/SideNavigation/types'
import IconSignOut from '../components/SVGIcons/IconSignOut'
import IconDocumentFilled from '../components/SVGIcons/IconDocumentFilled'

export default {
  title: 'Side Navigation',
  component: _SideNavigation,
  argTypes: {}
}

const Template: StoryFn<TSideNavigationPropTypes> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
    <_SideNavigation {...args} setOpen={setIsOpen} isOpen={isOpen}>
      <header>
        {/*<NavigationItem*/}
        {/*  As={() => (*/}
        {/*    <div>*/}
        {/*      <IconHandOpenHeart />*/}
        {/*      <Text>Welcome</Text>*/}
        {/*    </div>*/}
        {/*  )}*/}
        {/*  type={NavigationItemTypes.MAIN}*/}
        {/*  isOpen={isOpen}*/}
        {/*/>*/}
        <NavigationItem
          As={() => (
            <div>
              <Image imagePath={isOpen ? logo : logoClosed} isBackgroundImage={false} />
            </div>
          )}
          type={NavigationItemTypes.MAIN}
          isOpen={isOpen}
        />
      </header>
      <main>
        <Block isOpen={isOpen} label="Finance">
          <>
            <NavigationItem
              As={() => (
                <a href="/https://ameriabank.am">
                  <IconDocumentFilled />
                  <Text>Accounts</Text>
                </a>
              )}
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
              active
            />
            <NavigationItem
              As={() => (
                <a href="/https://ameriabank.am">
                  <IconLockClosed />
                  <Text>Test</Text>
                </a>
              )}
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
              showAction={args.showAction}
            />
            <NavigationItem
              As={() => (
                <a>
                  <IconHome />
                  <Text>Cards</Text>
                </a>
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
                      <Text>Accounts</Text>
                    </a>
                  )}
                  type={NavigationItemTypes.SUB}
                  isOpen={isOpen}
                />
                <NavigationItem
                  As={() => (
                    <a href="/https://ameriabank.am">
                      <IconSavings />
                      <Text>Savings</Text>
                    </a>
                  )}
                  type={NavigationItemTypes.SUB}
                  isOpen={isOpen}
                />
                <NavigationItem
                  As={() => (
                    <a href="/https://ameriabank.am">
                      <IconWallet />
                      <Text>Overdraft</Text>
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
                  <Text>Savings</Text>
                </a>
              )}
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
              showBadge
              badgeContent={'888+'}
            />
          </>
        </Block>
        <Block isOpen={isOpen} label="Finance">
          <>
            <NavigationItem
              As={() => (
                <a href="/https://ameriabank.am">
                  <IconWallet />
                  <Text>Overdraft</Text>
                </a>
              )}
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
            />
            <NavigationItem
              As={() => (
                <a href="/https://ameriabank.am">
                  <IconHome />
                  <Text>Mortgage</Text>
                </a>
              )}
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
            />
            <NavigationItem
              As={() => (
                <a>
                  <IconSavings />
                  <Text>Car Leon</Text>
                </a>
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
                      <Text>Savings</Text>
                    </a>
                  )}
                  type={NavigationItemTypes.SUB}
                  isOpen={isOpen}
                />
                <NavigationItem
                  As={() => (
                    <a href="/https://ameriabank.am">
                      <IconDocument />
                      <Text>Accounts</Text>
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
          <NavigationItem
            type={NavigationItemTypes.USER}
            isOpen={isOpen}
            expandable
            As={() => (
              <div className={'flexbox align-items--center'}>
                <Avatar imagePath={avatar} size={'xsmall'} />
                {isOpen ? (
                  <Text
                    className={'flexbox align-items--center justify-content--between profile-text'}
                  >
                    <>
                      Zhorzhik Grigoryan
                      <a href="https://ameriabank.am">
                        <IconSignOut />
                      </a>
                    </>
                  </Text>
                ) : null}
              </div>
            )}
          >
            <>
              <NavigationItem
                As={() => (
                  <a href="/">
                    <Text className={'text-truncate'}> Zhorzhik Grigoryan</Text>
                  </a>
                )}
                type={NavigationItemTypes.SUB}
                isOpen={isOpen}
              />
              <NavigationItem
                As={() => (
                  <a href="/https://ameriabank.am">
                    <IconSignOut />
                    <Text>Logout</Text>
                  </a>
                )}
                type={NavigationItemTypes.SUB}
                isOpen={isOpen}
              />
            </>
          </NavigationItem>
          {/*<NavigationItem*/}
          {/*  type={NavigationItemTypes.MAIN}*/}
          {/*  isOpen={isOpen}*/}
          {/*  As={() => (*/}
          {/*    <a href="https://ameriabank.am">*/}
          {/*      <IconSignOut />*/}
          {/*      <Text>Logout</Text>*/}
          {/*    </a>*/}
          {/*  )}*/}
          {/*/>*/}
        </Block>
      </footer>
    </_SideNavigation>
  )
}

export const SideNavigation = Template.bind({})

// @ts-ignore
SideNavigation.args = {}
