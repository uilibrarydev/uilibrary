import React, { useState } from 'react'
import {
  Avatar,
  Button,
  NavigationItem,
  SideNavigation as SideNavigationItemComp,
  Text
} from '../components'
import Block from '../components/SideNavigation/Block'
import logo from '../assets/images/logo.svg'
import logoClosed from '../assets/images/logo-closed.svg'
import avatar from '../assets/images/avatar.jpg'
import { NavigationItemTypes } from '../components/SideNavigation/NavigationItem/types'
import { Icon } from '../index'

export default {
  title: 'Side Navigation',
  component: SideNavigationItemComp,
  argTypes: {
    showAction: {
      options: [true, false]
    }
  }
}

const Template = (args): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
    <SideNavigationItemComp setOpen={setIsOpen} open={isOpen} {...args}>
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
                  <Icon name="document" />
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
                  <Icon name="lock" />
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
                  <Icon name="home" />
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
                      <Icon name={'document'} />
                      <div>Accounts</div>
                    </a>
                  )}
                  type={NavigationItemTypes.SUB}
                  isOpen={isOpen}
                />
                <NavigationItem
                  As={() => (
                    <a href="/https://ameriabank.am">
                      <Icon name={'savings'} />
                      <div>Savings</div>
                    </a>
                  )}
                  type={NavigationItemTypes.SUB}
                  isOpen={isOpen}
                />
                <NavigationItem
                  As={() => (
                    <a href="/https://ameriabank.am">
                      <Icon name={'wallet'} />
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
                  <Icon name={'savings'} />
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
                  <Icon name={'wallet'} />
                  <div>Overdraft</div>
                </a>
              )}
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
            />
            <NavigationItem
              As={() => (
                <a href="/https://ameriabank.am">
                  <Icon name={'home'} />
                  <div>Mortgage</div>
                </a>
              )}
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
            />
            <NavigationItem
              As={() => (
                <div>
                  <Icon name={'savings'} />
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
                      <Icon name={'savings'} />
                      <div>Savings</div>
                    </a>
                  )}
                  type={NavigationItemTypes.SUB}
                  isOpen={isOpen}
                />
                <NavigationItem
                  As={() => (
                    <a href="/https://ameriabank.am">
                      <Icon name={'document'} />
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
                  <Icon name={'mail'} />
                  <div>Messages</div>
                </a>
              )}
            />
            <NavigationItem
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
              As={() => (
                <a href="https://ameriabank.am">
                  <Icon name={'notification2'} />
                  <div>Notifications</div>
                </a>
              )}
            />
            <NavigationItem
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
              As={() => (
                <a href="https://ameriabank.am">
                  <Icon name={'settings'} />
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
                  <Icon name={'logout'} />
                </div>
              )}
            />
          </>
        </Block>
      </footer>
    </SideNavigationItemComp>
  )
}

export const SideNavigation = Template.bind({})

SideNavigation.args = {
  showAction: true,
  actionElm: <Button buttonText={'Action'} size="large" iconProps={{ name: 'home' }} />
}
