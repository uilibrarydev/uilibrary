export interface TUploadItemPropTypes {
  name?: string
  onRemove: (file:File,index: number) => void
  fileType?: string
  isFileUploaded?: boolean
  error?: boolean
  viewFiles?:boolean
  files: File[]
}
