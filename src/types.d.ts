import {MouseEvent} from 'react'
export type TColor =
  | 'borderGray'
  | 'labelGray'
  | 'justWhite'
  | 'textBlack'
  | 'dropdownGray'
  | 'inputWhite'
  | 'inputBorderGray'
  | 'inputBorderActive'
  | 'inputBorderError'
  | 'buttonGreen'
  | 'secButtonBorderGray'
  | 'iconGray'
  | 'footerTextGray'
  | 'footerUnderlineGray'
  | 'darkGray'

export type CallbackFnType = () => void

export type TIconSizes = {
  [size in TIconSize]: string
}

interface TCustomIcons {
  [iconName: string]: () => string
}

export type TCustomColors = {
  [color: string]: string
}

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

interface FieldError {
  ref?: RefObject<HTMLInputElement>
  message?: string
}

export type TFormData = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

interface StringEventTarget extends EventTarget {
  text: string
}

interface InputEvent extends EventTarget {
  target: { value: string, className?: string }
}

interface MouseEvent extends EventTarget {
  target: TextEventTarget | StringEventTarget
}

export type FieldErrors = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}
export type TSetValue = (name: string, value: unknown, config?: { [key: string]: unknown }) => void

interface FileEventTarget extends EventTarget {
  files: FileList
}

export type TTextAreaEventType = ChangeEventHandler<HTMLTextAreaElement>



declare module '*.svg'
