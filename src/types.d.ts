declare type TIconSize = 'xSmall' | 'small' | 'medium' | 'large'

declare type CallbackFnType = () => void

declare type TIconSizes = {
  [size in TIconSize]: string
}

interface TCustomIcons {
  [iconName: string]: (fillColor: string, size: string) => string
}

declare type TCustomColors = {
  [color: string]: string
}

interface TComponentProps {
  className?: string
  style?: Record<string, string>
  value?: string
  error?: string
  showError?: boolean
  label?: string
  onChange?: (value: React.FormEvent<HTMLInputElement>) => void
  setFieldValue: TSetValue
}

interface TInputChangeEventType extends EventTarget {
  target: { value: string }
}

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

interface FieldError {
  ref?: React.RefObject<HTMLInputElement>
  message?: string
}

declare type FormInitialValue = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

declare type TEventType = MouseEvent | UIEvent<HTMLDivElement>

interface StringEventTarget extends EventTarget {
  text: string
}
interface InputEvent extends EventTarget {
  target: { value: string }
}
interface MouseEvent extends EventTarget {
  target: TextEventTarget | StringEventTarget
}

type FieldError = {
  message: string
}
declare type FieldErrors = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

declare type TSetValue = (name: string, value: unknown, config?: { [key: string]: unknown }) => void

declare type TRegister = (name: string, RegisterOptions?) => { onChange; onBlur; name; ref }

interface FileEventTarget extends EventTarget {
  files: FileList
}
