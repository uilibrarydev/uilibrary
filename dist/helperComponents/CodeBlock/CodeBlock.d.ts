import { type FC } from 'react';
export interface Props {
    title?: string;
    className?: string;
    children: string | string[];
    language?: string;
}
export declare const CodeBlock: FC<Props>;
