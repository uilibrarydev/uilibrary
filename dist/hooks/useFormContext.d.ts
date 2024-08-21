import { Control, FieldValues, UseFormRegister } from 'react-hook-form';
type TFormContextProps = {
    register?: UseFormRegister<TFormData>;
    errors?: FieldErrors;
    setValue: TSetValue;
    control?: Control<FieldValues, unknown>;
};
export declare const useFormContext: () => TFormContextProps;
export {};
