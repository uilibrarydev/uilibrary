export declare const noop: () => void;
export declare const checkIsAllowedFileSize: (allowedSize: number, fileSize: number) => boolean;
export declare const openFileInNewWindow: ({ e, file, handleFileClick }: {
    e: TClickEventType;
    file: File;
    handleFileClick?: ((file: File) => void) | undefined;
}) => void;
export declare const getFormattedValues: (files: File[]) => FileReader[];
export declare const uniqueFiles: (files: File[]) => File[];
export declare const checkIsAllowedTypes: (allowedTypes: string, mimeType: string) => boolean;
export declare const getStringWidth: (text: string, fontSize: number) => number;
export declare const setTranslationValue: (translation: string, value: string | number) => string;
export declare const getYearOptions: (startYear: number, lastYear: number) => TSelectOptions;
export declare const isSameDay: (date1?: Date, date2?: Date) => boolean;
