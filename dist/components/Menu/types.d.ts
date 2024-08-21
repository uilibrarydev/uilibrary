export type TMenuItem = {
    label: TItemLabel;
    value: TItemValue;
    iconProps?: TSelectIconProps;
    handler?: TCallBackFn;
    disabled?: boolean;
    dataId?: string;
    meta?: string;
};
export type TMenuProps = {
    className?: string;
    menuItems: TMenuItem[];
    parentRef: HTMLElement;
    onClose: TCallBackFn;
    position?: TTooltipPosition;
    isOpen: boolean;
};
export type TNestedMenuItemProps = {
    title: string;
    value: string | number;
    subItems: TMenuItem[];
    iconProps?: TSelectIconProps;
};
export type TNestedMenuProps = {
    menuItems: TNestedMenuItemProps[];
    parentRef: HTMLElement;
    onClose: TCallBackFn;
    className?: string;
    position?: TTooltipPosition;
    isOpen?: boolean;
};
