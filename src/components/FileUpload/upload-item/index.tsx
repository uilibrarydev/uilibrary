import React from 'react'
import Text from '../../Text'
import {TUploadItemPropTypes} from './types'
import '../../../assets/styles/components/_upload.scss'
import Button from '../../Button';
import Progress from '../../Progress';
import Image from '../../Image';
import ErrorMessage from '../../../helperComponents/ErrorMessage';

const FILE_ICON_NAME: Record<string, string> = {
    png: 'file_png',
    jpeg: 'file_jpeg',
    pdf: 'file_pdf'
}

const UploadItem = (props: TUploadItemPropTypes): JSX.Element => {
    const {name, onRemove, fileType, isFileUploaded = false, error} = props
    const iconName = FILE_ICON_NAME[fileType] || FILE_ICON_NAME.png

    return (
        <div className="upload-item mt-4">
            {isFileUploaded ? (
                <div className="upload-item__image">
                    <Image isBackgroundImage={true} backgroundSize="cover" imagePath="static/media/src/assets/images/avatar.jpg"/>
                </div>
            ) : null}

            <div className="upload-item__inner">
                <div className="upload-item__content mb-2">
                    <div className="upload-item__content__inner pr-8">
                        <Text size="small" className="upload-item__text">{name}</Text>
                        {error ? <ErrorMessage message="Maximum image size: 8 MB"/> : null}
                    </div>
                    <Button type="tertiary" size="small" iconProps={{name: 'trash'}} onClick={onRemove}/>
                </div>
                {!isFileUploaded ? <Progress size="small" noText={true}/> : null}
            </div>
        </div>
    )
}

export default UploadItem
