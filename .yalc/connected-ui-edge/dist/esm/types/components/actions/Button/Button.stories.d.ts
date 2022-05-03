import React from "react";
import { ComponentStory } from "@storybook/react";
declare const _default: {
    title: string;
    component: {
        (props: {
            type?: "primary" | "secondary" | undefined;
            children: React.ReactNode;
            onClick: Function;
        }): JSX.Element;
        defaultProps: {
            children: string;
            type: string;
        };
    };
};
export default _default;
export declare const Primary: ComponentStory<{
    (props: {
        type?: "primary" | "secondary" | undefined;
        children: React.ReactNode;
        onClick: Function;
    }): JSX.Element;
    defaultProps: {
        children: string;
        type: string;
    };
}>;
export declare const Secondary: ComponentStory<{
    (props: {
        type?: "primary" | "secondary" | undefined;
        children: React.ReactNode;
        onClick: Function;
    }): JSX.Element;
    defaultProps: {
        children: string;
        type: string;
    };
}>;
