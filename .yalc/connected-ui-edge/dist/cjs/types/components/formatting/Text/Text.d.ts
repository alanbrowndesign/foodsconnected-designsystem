/// <reference types="react" />
declare type TextProps = {
    children: React.ReactNode;
    typeStyle?: "hero" | "headline" | "title1" | "title2" | "title3" | "heading" | "subhead" | "body" | "footnote" | "caption" | "micro";
    tag?: any;
    color?: string;
    leading?: "tighter" | "tight" | "normal" | "wide";
    weight?: "standard" | "heavy";
    size?: number;
    font?: "display" | "text";
};
export declare const Text: ({ children, typeStyle, tag, color, leading, weight, size, font, }: TextProps) => JSX.Element;
export {};
