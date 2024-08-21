import { ReactElement } from 'react';
interface IconDynamicComponentProps {
    componentName: string;
    size?: string;
    type?: string;
    className?: string;
}
export declare const IconDynamicComponent: ({ componentName, size, type, className }: IconDynamicComponentProps) => ReactElement | null;
export default IconDynamicComponent;
