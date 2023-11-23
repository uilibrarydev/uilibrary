import React from 'react'
import {AvatarGroup as AvatarGroupComp} from '../components'
import {TAvatarProps} from '../components/Avatar/types';
import imageFile from '../assets/images/avatar.jpg'

const image = {
    src: imageFile,
    alt: 'my image'
}

export default {
    title: 'AvatarGroup',
    component: AvatarGroupComp,
    argTypes: {
        showInvisibleAvatarsAmount:{
            options:[false,true],
            control: { type: 'radio' }
        },
        onAddUser:{
            options:[false,true],
            control: { type: 'radio' }
        },
    }
}


const Avatars = [
    {
        initials:'G M',
        size:'large',
        tooltipContent:'G M'
    },
    {
        imagePath:image.src,
        size:'large',
        tooltipContent:'AVATAR'
    },
    {
        initials:'T M',
        size:'large',
        tooltipContent:'T M'

    },
    {
        imagePath:image.src,
        size:'large'
    },
    {
        initials:'T M',
        size:'large'
    },
    {
        imagePath:image.src,
        size:'large'
    },



] as TAvatarProps;

const Template = (args) =>{
    return  <AvatarGroupComp {...args}/>
}

export const AvatarGroup = Template.bind({})

AvatarGroup.args = {
    avatarGroup:Avatars,
    onAddUser: ()=>{
        console.log('add user')
    }
}
