import React from 'react'
import {ImagePropTypes} from './types'
import './index.scss'

const Image = (props: ImagePropTypes): JSX.Element => {
    const {
        name,
        imagePath,
        isBackgroundImage,
        backgroundSize,
        className = '',
        isFullWidth,
        isFullHeight,
    } = props

    return (
        <div className={`image ${className}`}
             style={{
                 backgroundImage: `${!isBackgroundImage ? `url(${imagePath})` : ''}`,
                 backgroundSize: `${!isBackgroundImage ? backgroundSize : '' }`
        }} >
            { isBackgroundImage && <img src={imagePath} alt={name}
                                       style={{
                                           width: isFullWidth ? '100%' : '',
                                           height: isFullHeight ? '100%' : ''
                                       }} />
            }
        </div>
    )

}

export default Image
