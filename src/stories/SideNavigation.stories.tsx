import React, {useState} from 'react'
import {Avatar, Button, NavigationItem, SideNavigation as SideNavigationItemComp, Text} from '../components'
import Block from '../components/SideNavigation/Block'
import logo from '../assets/images/logo.svg'
import logoClosed from '../assets/images/logo-closed.svg'
import avatar from '../assets/images/avatar.jpg'
import {NavigationItemTypes} from '../components/SideNavigation/NavigationItem/types';

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
                            <img src={open ? logo : logoClosed} alt="Product Logo"/>
                        </a>
                    )}
                    type={NavigationItemTypes.BLOCK_HEADER}
                    open={open}
                    showAction={args.showAction}
                    actionElm={args.actionElm}
                />
                <Block open={open} label="Finance">
                    <>
                        <NavigationItem
                            As={() => <a href="/https://ameriabank.am">Accounts</a>}
                            type={NavigationItemTypes.MAIN}
                            iconName="document"
                            open={open}
                            showAction={args.showAction}
                            actionElm={args.actionElm}
                            active={true}
                        />
                        <NavigationItem
                            As={() => <div>Cards</div>}
                            type={NavigationItemTypes.MAIN}
                            iconName="home"
                            open={open}
                            expandable={true}
                            Child={() => (
                                <>
                                    <NavigationItem
                                        As={() => <a href="/https://ameriabank.am">Accounts</a>}
                                        type={NavigationItemTypes.MAIN}
                                        iconName="document"
                                        open={open}
                                    />
                                    <NavigationItem
                                        As={() => <a href="/https://ameriabank.am">Savings</a>}
                                        type={NavigationItemTypes.MAIN}
                                        iconName="savings"
                                        open={open}
                                    />
                                </>
                            )}
                        />
                        <NavigationItem
                            As={() => <a href="/https://ameriabank.am">Savings</a>}
                            type={NavigationItemTypes.MAIN}
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
                            type={NavigationItemTypes.MAIN}
                            iconName="wallet"
                            open={open}
                        />
                        <NavigationItem
                            As={() => <a href="/https://ameriabank.am">Mortgage</a>}
                            type={NavigationItemTypes.MAIN}
                            iconName="home"
                            open={open}
                        />
                        <NavigationItem
                            As={() => <div>Car Leon</div>}
                            type={NavigationItemTypes.MAIN}
                            iconName="savings"
                            open={open}
                            expandable={true}
                            Child={() => (
                                <>
                                    <NavigationItem
                                        As={() => <a href="/https://ameriabank.am">Savings</a>}
                                        type={NavigationItemTypes.MAIN}
                                        iconName="savings"
                                        open={open}
                                    />
                                    <NavigationItem
                                        As={() => <a href="/https://ameriabank.am">Accounts</a>}
                                        type={NavigationItemTypes.MAIN}
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
                            type={NavigationItemTypes.MAIN}
                            open={open}
                            iconName={'mail'}
                            As={() => <a href="/https://ameriabank.am">Messages</a>}
                        />
                        <NavigationItem
                            type={NavigationItemTypes.MAIN}
                            open={open}
                            iconName={'notification2'}
                            As={() => <a href="https://ameriabank.am">Notifications</a>}
                        />
                        <NavigationItem
                            type={NavigationItemTypes.MAIN}
                            open={open}
                            iconName={'settings'}
                            As={() => <a href="https://ameriabank.am">Settings</a>}
                        />
                        <NavigationItem
                            type={NavigationItemTypes.USER}
                            open={open}
                            iconName={'logout'}
                            userImage={<Avatar imagePath={avatar} size={open ? 'small' : 'xsmall'}/>}
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
