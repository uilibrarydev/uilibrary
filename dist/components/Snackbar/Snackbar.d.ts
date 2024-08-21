import { ReactElement } from 'react';
import { TSnackbarProps, TToastProps } from './types';
import 'react-toastify/dist/ReactToastify.css';
export declare const notify: (toastProps: TToastProps) => void;
export declare const Snackbar: (props: TSnackbarProps) => ReactElement;
