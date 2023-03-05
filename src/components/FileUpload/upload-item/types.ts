export interface TUploadItemPropTypes {
  name?: string
  onRemove: () => void
  fileType?: string
  isFileUploaded?: boolean
  error?: boolean
}
