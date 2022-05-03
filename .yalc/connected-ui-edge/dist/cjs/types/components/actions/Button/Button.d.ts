/// <reference types="react" />
declare type ButtonProps = {
    type?: "primary" | "secondary";
    children: React.ReactNode;
    onClick: Function;
};
export declare const Button: {
    (props: ButtonProps): JSX.Element;
    defaultProps: {
        children: string;
        type: string;
    };
};
export {};
