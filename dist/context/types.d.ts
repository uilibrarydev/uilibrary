/// <reference types="react" />
import { Control, FieldValues, UseFormRegister, UseFormGetValues, UseFormWatch, UseFormReset, UseFormClearErrors, UseFormSetError, UseFormTrigger, UseFormGetFieldState, UseFormUnregister } from 'react-hook-form';
export type TFormContextProps = {
    register?: UseFormRegister<TFormData>;
    errors?: FieldErrors;
    setValue: TSetValue;
    control?: Control<FieldValues, unknown>;
    getValues?: UseFormGetValues<TFormData>;
    watch?: UseFormWatch<TFormData>;
    reset?: UseFormReset<TFormData>;
    isDirty?: boolean;
    clearErrors?: UseFormClearErrors<TFormData>;
    setError?: UseFormSetError<TFormData>;
    isSubmitted: boolean;
    isSubmitting: boolean;
    dirtyFields: TDirtyFields;
    trigger?: UseFormTrigger<TFormData>;
    getFieldState?: UseFormGetFieldState<TFormData>;
    unregister?: UseFormUnregister<TFormData>;
};
export declare const FormContext: import("react").Context<TFormContextProps>;
