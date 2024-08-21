/// <reference types="react" />
import { TFormContextProps } from './types';
export declare const WithFormFeedback: ({ children }: {
    children?: ((context: TFormContextProps) => JSX.Element | null) | undefined;
}) => JSX.Element | null;
