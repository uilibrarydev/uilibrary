declare type CallbackFnType = () => void

declare type TComponentProps = {
  ref: RefCallBack
  className?: string
  onChange: (value: React.FormEvent<HTMLInputElement>) => void
}

declare type TInputChangeEventType = React.FormEvent<HTMLInputElement>



declare type TEventType = MouseEvent | UIEvent<HTMLDivElement>

type TButtonEventTarget = EventTarget

interface TClickMouseEvent extends MouseEventHandler<HTMLButtonElement> {
  target: TButtonEventTarget
}



declare type FieldError = {
  type: string
  ref?: React.RefObject<HTMLInputElement> 
  types?: MultipleFieldErrors
  message?: Message
};


declare type TFormFieldName=string 


declare type TFieldValue =string //| number | null

declare type FieldValues =  Record<string, TFieldValue>;


declare type FieldErrors<
  TFieldValues extends FieldValues = FieldValues
> = DeepMap<TFieldValues, FieldError>;


