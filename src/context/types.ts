import { createContext } from 'react'
import {
    Control,
    FieldValues,
    UseFormRegister,
    UseFormGetValues,
    UseFormWatch,
    UseFormReset,
    UseFormClearErrors,
    UseFormSetError,
    UseFormTrigger
} from 'react-hook-form'
import { noop } from '../utils/helpers'
import {FieldErrors, TFormData, TSetValue} from '../types';
import {TDirtyFields} from '../types/types';

export type TFormContextProps = {
    register?: UseFormRegister<TFormData>
    errors?: FieldErrors
    setValue: TSetValue
    control?: Control<FieldValues, unknown>
    getValues?: UseFormGetValues<TFormData>
    watch?: UseFormWatch<TFormData>
    reset?: UseFormReset<TFormData>
    isDirty?: boolean
    clearErrors?: UseFormClearErrors<TFormData>
    setError?: UseFormSetError<TFormData>
    isSubmitted: boolean
    isSubmitting: boolean
    dirtyFields: TDirtyFields
    trigger?: UseFormTrigger<TFormData>
}
export const FormContext = createContext<TFormContextProps>({
    setValue: noop,
    isSubmitted: false,
    isSubmitting: false,
    dirtyFields: {}
})
