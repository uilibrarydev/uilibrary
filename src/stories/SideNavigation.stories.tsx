import React, {useState} from 'react'
import {Avatar, Button, NavigationItem, SideNavigation as SideNavigationItemComp, Text} from '../components'
import Block from '../components/SideNavigation/Block'
import logo from '../assets/images/logo.svg'
import logoClosed from '../assets/images/logo-closed.svg'
import avatar from '../assets/images/avatar.jpg'
import {NavigationItemTypes} from '../components/SideNavigation/NavigationItem/types'

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
                            <img src={isOpen ? logo : logoClosed} alt="Product Logo"/>
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
                            As={() => <a href="/https://ameriabank.am">Accounts</a>}
                            type={NavigationItemTypes.MAIN}
                            iconName="document"
                            isOpen={isOpen}
                            showAction={args.showAction}
                            actionElm={args.actionElm}
                            active
                        />
                        <NavigationItem
                            As={() => <div>Cards</div>}
                            type={NavigationItemTypes.MAIN}
                            iconName="home"
                            isOpen={isOpen}
                            expandable
                        >
                            <>
                                <NavigationItem
                                    As={() => <a href="/https://ameriabank.am">Accounts</a>}
                                    type={NavigationItemTypes.MAIN}
                                    iconName="document"
                                    isOpen={isOpen}
                                />
                                <NavigationItem
                                    As={() => <a href="/https://ameriabank.am">Savings</a>}
                                    type={NavigationItemTypes.MAIN}
                                    iconName="savings"
                                    isOpen={isOpen}
                                />
                            </>
                        </NavigationItem>
                        <NavigationItem
                            As={() => <a href="/https://ameriabank.am">Savings</a>}
                            type={NavigationItemTypes.MAIN}
                            iconName="savings"
                            isOpen={isOpen}
                            showBadge
                            badgeContent={'888+'}
                        />
                    </>
                </Block>
                <Block open={isOpen} label="Finance">
                    <>
                        <NavigationItem
                            As={() => <a href="/https://ameriabank.am">Overdraft</a>}
                            type={NavigationItemTypes.MAIN}
                            iconName="wallet"
                            isOpen={isOpen}
                        />
                        <NavigationItem
                            As={() => <a href="/https://ameriabank.am">Mortgage</a>}
                            type={NavigationItemTypes.MAIN}
                            iconName="home"
                            isOpen={isOpen}
                        />
                        <NavigationItem
                            As={() => <div>Car Leon</div>}
                            type={NavigationItemTypes.MAIN}
                            iconName="savings"
                            isOpen={isOpen}
                            expandable
                        >
                            <>
                                <NavigationItem
                                    As={() => <a href="/https://ameriabank.am">Savings</a>}
                                    type={NavigationItemTypes.MAIN}
                                    iconName="savings"
                                    isOpen={isOpen}
                                />
                                <NavigationItem
                                    As={() => <a href="/https://ameriabank.am">Accounts</a>}
                                    type={NavigationItemTypes.MAIN}
                                    iconName="document"
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
                            iconName={'mail'}
                            As={() => <a href="/https://ameriabank.am">Messages</a>}
                        />
                        <NavigationItem
                            type={NavigationItemTypes.MAIN}
                            isOpen={isOpen}
                            iconName={'notification2'}
                            As={() => <a href="https://ameriabank.am">Notifications</a>}
                        />
                        <NavigationItem
                            type={NavigationItemTypes.MAIN}
                            isOpen={isOpen}
                            iconName={'settings'}
                            As={() => <a href="https://ameriabank.am">Settings</a>}
                        />
                        <NavigationItem
                            type={NavigationItemTypes.USER}
                            isOpen={isOpen}
                            iconName={'logout'}
                            userImage={<Avatar imagePath={avatar} size={isOpen ? 'small' : 'xsmall'}/>}
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
    actionElm: <Button buttonText={'Action'} size="large" iconProps={{name: 'home'}}/>
}
