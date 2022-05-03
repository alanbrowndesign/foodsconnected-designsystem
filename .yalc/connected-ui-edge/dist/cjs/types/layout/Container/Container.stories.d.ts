import React from "react";
import { ComponentStory } from "@storybook/react";
declare const _default: {
    title: string;
    component: ({ width, gap, sidePadding, children, }: {
        width?: "micro" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "max" | undefined;
        gap?: number | undefined;
        sidePadding?: "tight" | "normal" | "none" | "loose" | undefined;
        children: React.ReactNode;
    }) => JSX.Element;
};
export default _default;
export declare const Medium: ComponentStory<({ width, gap, sidePadding, children, }: {
    width?: "micro" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "max" | undefined;
    gap?: number | undefined;
    sidePadding?: "tight" | "normal" | "none" | "loose" | undefined;
    children: React.ReactNode;
}) => JSX.Element>;
