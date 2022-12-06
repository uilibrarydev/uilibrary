export interface FileUploadProps {
  allowedTypes: Array<string>
  label: string
  getFile: (file: HTMLInputEvent) => void
  name: string
  setFieldValue: TSetValue
}
