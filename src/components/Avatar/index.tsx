import React, {useState} from 'react'
import {TAvatarProps} from './types'
import '../../assets/styles/components/_avatar.scss'
import Icon from '../Icon';

export const Avatar = (props: TAvatarProps): JSX.Element | null => {
    const {type, size, imagePath, initials = 'AG', className = '', isEditable} = props
    const [isHovered, setHoverState] = useState(false);

    return (
        <div
            className={`avatar avatar--${type} avatar--${size} ${className} 
                        ${imagePath ? 'avatar--image' : ''}
                        ${isEditable ? 'avatar--edit' : ''}
                       `}
            style={{backgroundImage: `url(${imagePath})`}}
        >
            {!imagePath && initials}
            {isEditable ? (
                <span className="avatar__icon"
                      onMouseEnter={() => {
                          setHoverState(true);
                      }}
                      onMouseLeave={() => {
                          setHoverState(false);
                      }}
                >
                    <Icon name={isHovered ? 'edit-fill' : 'edit'} size="xsmall" type="secondary"></Icon>
                </span>
            ) : null}
        </div>
    )
}

export default Avatar
