import React, {useCallback, useRef, useState} from 'react'
import UploadItem from './upload-item'
import {TFileUploadProps} from './types'
import '../../assets/styles/components/_upload.scss'
import Button from '../Button';

const FileUpload = (props: TFileUploadProps): JSX.Element | null => {
    const {allowedTypes = ['*'], label, getFiles, name, setFieldValue, toBase64, required, isFileUploaded} = props

    const [file, setFile] = useState<File | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    const getFileType = () => {
        if (file && file.type) {
            return file.type.split('/')[1]
        }
        return ''
    }

    const updateInForm = useCallback(
        (value: File | null) => {
            if (name && setFieldValue) {
                setFieldValue(name, value, {shouldValidate: !!value})
            }
        },
        [name, setFieldValue]
    )

    const getFormattedValue = (file: File) => {
        const reader = new FileReader()
        reader.onloadend = () => {
            console.log(reader.result)
        }
        reader.readAsDataURL(file)
        return reader
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target?.files && event?.target?.files[0]) {
            setFile(event?.target?.files[0])
            updateInForm(event?.target?.files[0])

            if (getFiles) {
                if (toBase64) {
                    getFormattedValue(event?.target?.files[0])
                } else {
                    getFiles(event?.target?.files[0])
                }
            }
        }
    }

    const handleFileRemove = useCallback(() => {
        setFile(null)
        updateInForm(null)
    }, [updateInForm])

    // if (file) {
    //   return (
    //     <UploadedState name={file?.['name']} onRemove={handleFileRemove} fileType={getFileType()} />
    //   )
    // }

    return (
        <div className="file-upload">
            <input
                name={name}
                type="file"
                className="hide"
                ref={fileInputRef}
                accept={`${allowedTypes.join(',')}`}
                onChange={handleChange}
            />
            <Button type="secondary" size="medium" iconProps={{name: 'attach', alignment: 'left'}} onClick={handleClick} buttonText={label} />

                {/*<Text>{`Թույլատրելի տեսակներ ${allowedTypes.join(', ')}`}</Text>*/}

            {file ? (
                <UploadItem name={file?.['name']} onRemove={handleFileRemove} fileType={getFileType()} isFileUploaded={isFileUploaded}/>
            ) : null

            }
        </div>
    )
}

export default FileUpload
