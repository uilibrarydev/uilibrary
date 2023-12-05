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
  const [open, setOpen] = useState<boolean>(true)

  return (
    <SideNavigationItemComp setOpen={setOpen} open={open} {...args}>
      <main>
        <NavigationItem
          As={() => (
            <a href="/https://ameriabank.am">
              <img src={open ? logo : logoClosed} alt="" />
            </a>
          )}
          type={'block-header'}
          open={open}
          showAction={args.showAction}
          actionElm={args.actionElm}
        />
        <Block open={open} label="Finance">
          <>
            <NavigationItem
              As={() => <a href="/https://ameriabank.am">Accounts</a>}
              type={'main'}
              iconName="document"
              open={open}
              showAction={args.showAction}
              actionElm={args.actionElm}
              active={true}
            />
            <NavigationItem
              As={() => <div>Cards</div>}
              type={'main'}
              iconName="home"
              open={open}
              expandable={true}
              Child={() => (
                <>
                  <NavigationItem
                    As={() => <a href="/https://ameriabank.am">Accounts</a>}
                    type={'main'}
                    iconName="document"
                    open={open}
                  />
                  <NavigationItem
                    As={() => <a href="/https://ameriabank.am">Savings</a>}
                    type={'main'}
                    iconName="savings"
                    open={open}
                  />
                </>
              )}
            />
            <NavigationItem
              As={() => <a href="/https://ameriabank.am">Savings</a>}
              type={'main'}
              iconName="savings"
              open={open}
              showBadge={true}
              badgeContent={'888+'}
            />
          </>
        </Block>
        <Block open={open} label="Finance">
          <>
            <NavigationItem
              As={() => <a href="/https://ameriabank.am">Overdraft</a>}
              type={'main'}
              iconName="wallet"
              open={open}
            />
            <NavigationItem
              As={() => <a href="/https://ameriabank.am">Mortgage</a>}
              type={'main'}
              iconName="home"
              open={open}
            />
            <NavigationItem
              As={() => <div>Car Leon</div>}
              type={'main'}
              iconName="savings"
              open={open}
              expandable={true}
              Child={() => (
                <>
                  <NavigationItem
                    As={() => <a href="/https://ameriabank.am">Savings</a>}
                    type={'main'}
                    iconName="savings"
                    open={open}
                  />
                  <NavigationItem
                    As={() => <a href="/https://ameriabank.am">Accounts</a>}
                    type={'main'}
                    iconName="document"
                    open={open}
                  />
                </>
              )}
            />
          </>
        </Block>
      </main>
      <footer>
        <Block>
          <>
            <NavigationItem
              type="main"
              open={open}
              iconName={'mail'}
              As={() => <a href="/https://ameriabank.am">Messages</a>}
            />
            <NavigationItem
              type="main"
              open={open}
              iconName={'notification2'}
              As={() => <a href="https://ameriabank.am">Notifications</a>}
            />
            <NavigationItem
              type="main"
              open={open}
              iconName={'settings'}
              As={() => <a href="https://ameriabank.am">Settings</a>}
            />
            <NavigationItem
              type="user"
              open={open}
              iconName={'logout'}
              userImage={<Avatar imagePath={avatar} size={open ? 'small' : 'xsmall'} />}
              As={() => <Text size="medium">Zhorzhik Grigoryan</Text>}
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
