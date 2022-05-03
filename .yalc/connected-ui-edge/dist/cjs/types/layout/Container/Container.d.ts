/// <reference types="react" />
declare type ContainerProps = {
    width?: "micro" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "max";
    gap?: number;
    sidePadding?: "none" | "tight" | "normal" | "loose";
    children: React.ReactNode;
};
export declare const Container: ({ width, gap, sidePadding, children, }: ContainerProps) => JSX.Element;
export {};
