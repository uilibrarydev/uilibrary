export interface TUploadItemPropTypes {
  name?: string
  onRemove: (file: File, index: number) => void
  fileType?: string
  isFileUploaded?: boolean
  error?: boolean
  handleClick?:(file:File)=>void
  withFileView?: boolean
  files: File[]
}
