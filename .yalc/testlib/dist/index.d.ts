/// <reference types="react" />
import * as _stitches_react_types_theme from '@stitches/react/types/theme';
import * as _stitches_react_types_css from '@stitches/react/types/css';
import * as _stitches_react_types_styled_component from '@stitches/react/types/styled-component';
import * as _stitches_react_types_css_util from '@stitches/react/types/css-util';
export { CSS } from '@stitches/react/types/css-util';
import * as _stitches_react_types_util from '@stitches/react/types/util';
import * as react from 'react';
import * as _stitches_react_types_stitches from '@stitches/react/types/stitches';
import * as _stitches_react_types_config from '@stitches/react/types/config';

interface ButtonProps {
    label: string;
}
declare const Button: (props: ButtonProps) => JSX.Element;

declare const typeStyleNames: string[];
declare const stitches: _stitches_react_types_stitches.default<"", {}, {
    fonts: {
        display: string;
        text: string;
    };
    fontWeights: {
        standard: number;
        heavy: number;
    };
    letterSpacings: {
        tightest: string;
        tighter: string;
        tight: string;
        normal: number;
        wide: string;
        wider: string;
        widest: string;
    };
    fontSizes: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
    };
    colors: {
        primaryBrand: string;
        primaryMidnight: string;
        white: string;
        neutral100: string;
        neutral200: string;
        neutral300: string;
        neutral400: string;
        neutral500: string;
        neutral600: string;
        neutral700: string;
        neutral800: string;
        neutral900: string;
        midnight100: string;
        midnight300: string;
        midnight500: string;
        midnight700: string;
        midnight900: string;
        accentOrange: string;
        accentOrangeDark: string;
        accentPink: string;
        accentPurple: string;
        accentNavy: string;
        accentRoyal: string;
        accentCyan: string;
        accentSky: string;
        accentTeal: string;
        accentLime: string;
    };
    lineHeights: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
    };
    media: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xs1: string;
        xs2: string;
        xs3: string;
        sm1: string;
        sm2: string;
        sm3: string;
        md1: string;
        md2: string;
        md3: string;
        lg1: string;
        lg2: string;
        lg3: string;
        xl1: string;
        xl2: string;
        xl3: string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    typeStyle: (styleName: any) => {
        fontSize: string;
        fontWeight: string;
        fontFamily: string;
        lineHeight: string;
        letterSpacing: string;
    } | {
        fontSize: string;
        fontFamily: string;
        fontWeight: string;
        letterSpacing: string;
        lineHeight?: undefined;
    } | {
        fontSize: string;
        fontFamily: string;
        letterSpacing: string;
        fontWeight?: undefined;
        lineHeight?: undefined;
    } | {
        fontSize: string;
        fontFamily: string;
        fontWeight?: undefined;
        lineHeight?: undefined;
        letterSpacing?: undefined;
    } | {
        fontSize?: undefined;
        fontWeight?: undefined;
        fontFamily?: undefined;
        lineHeight?: undefined;
        letterSpacing?: undefined;
    };
}>;
declare const styled: <Type extends react.ComponentType<any> | keyof JSX.IntrinsicElements | _stitches_react_types_util.Function, Composers extends (string | react.ComponentType<any> | _stitches_react_types_util.Function | {
    [name: string]: unknown;
})[], CSS = _stitches_react_types_css_util.CSS<{}, {
    fonts: {
        display: string;
        text: string;
    };
    fontWeights: {
        standard: number;
        heavy: number;
    };
    letterSpacings: {
        tightest: string;
        tighter: string;
        tight: string;
        normal: number;
        wide: string;
        wider: string;
        widest: string;
    };
    fontSizes: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
    };
    colors: {
        primaryBrand: string;
        primaryMidnight: string;
        white: string;
        neutral100: string;
        neutral200: string;
        neutral300: string;
        neutral400: string;
        neutral500: string;
        neutral600: string;
        neutral700: string;
        neutral800: string;
        neutral900: string;
        midnight100: string;
        midnight300: string;
        midnight500: string;
        midnight700: string;
        midnight900: string;
        accentOrange: string;
        accentOrangeDark: string;
        accentPink: string;
        accentPurple: string;
        accentNavy: string;
        accentRoyal: string;
        accentCyan: string;
        accentSky: string;
        accentTeal: string;
        accentLime: string;
    };
    lineHeights: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
    };
    media: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xs1: string;
        xs2: string;
        xs3: string;
        sm1: string;
        sm2: string;
        sm3: string;
        md1: string;
        md2: string;
        md3: string;
        lg1: string;
        lg2: string;
        lg3: string;
        xl1: string;
        xl2: string;
        xl3: string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    typeStyle: (styleName: any) => {
        fontSize: string;
        fontWeight: string;
        fontFamily: string;
        lineHeight: string;
        letterSpacing: string;
    } | {
        fontSize: string;
        fontFamily: string;
        fontWeight: string;
        letterSpacing: string;
        lineHeight?: undefined;
    } | {
        fontSize: string;
        fontFamily: string;
        letterSpacing: string;
        fontWeight?: undefined;
        lineHeight?: undefined;
    } | {
        fontSize: string;
        fontFamily: string;
        fontWeight?: undefined;
        lineHeight?: undefined;
        letterSpacing?: undefined;
    } | {
        fontSize?: undefined;
        fontWeight?: undefined;
        fontFamily?: undefined;
        lineHeight?: undefined;
        letterSpacing?: undefined;
    };
}>>(type: Type, ...composers: { [K in keyof Composers]: Composers[K] extends string | react.ComponentType<any> | _stitches_react_types_util.Function ? Composers[K] : _stitches_react_types_stitches.RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : _stitches_react_types_util.WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : _stitches_react_types_util.WideObject) | undefined;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => _stitches_react_types_styled_component.StyledComponent<Type, _stitches_react_types_styled_component.StyledComponentProps<Composers>, {}, _stitches_react_types_css_util.CSS<{}, {
    fonts: {
        display: string;
        text: string;
    };
    fontWeights: {
        standard: number;
        heavy: number;
    };
    letterSpacings: {
        tightest: string;
        tighter: string;
        tight: string;
        normal: number;
        wide: string;
        wider: string;
        widest: string;
    };
    fontSizes: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
    };
    colors: {
        primaryBrand: string;
        primaryMidnight: string;
        white: string;
        neutral100: string;
        neutral200: string;
        neutral300: string;
        neutral400: string;
        neutral500: string;
        neutral600: string;
        neutral700: string;
        neutral800: string;
        neutral900: string;
        midnight100: string;
        midnight300: string;
        midnight500: string;
        midnight700: string;
        midnight900: string;
        accentOrange: string;
        accentOrangeDark: string;
        accentPink: string;
        accentPurple: string;
        accentNavy: string;
        accentRoyal: string;
        accentCyan: string;
        accentSky: string;
        accentTeal: string;
        accentLime: string;
    };
    lineHeights: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
    };
    media: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xs1: string;
        xs2: string;
        xs3: string;
        sm1: string;
        sm2: string;
        sm3: string;
        md1: string;
        md2: string;
        md3: string;
        lg1: string;
        lg2: string;
        lg3: string;
        xl1: string;
        xl2: string;
        xl3: string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    typeStyle: (styleName: any) => {
        fontSize: string;
        fontWeight: string;
        fontFamily: string;
        lineHeight: string;
        letterSpacing: string;
    } | {
        fontSize: string;
        fontFamily: string;
        fontWeight: string;
        letterSpacing: string;
        lineHeight?: undefined;
    } | {
        fontSize: string;
        fontFamily: string;
        letterSpacing: string;
        fontWeight?: undefined;
        lineHeight?: undefined;
    } | {
        fontSize: string;
        fontFamily: string;
        fontWeight?: undefined;
        lineHeight?: undefined;
        letterSpacing?: undefined;
    } | {
        fontSize?: undefined;
        fontWeight?: undefined;
        fontFamily?: undefined;
        lineHeight?: undefined;
        letterSpacing?: undefined;
    };
}>>;
declare const globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? _stitches_react_types_css.AtRule.FontFace | _stitches_react_types_css.AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: _stitches_react_types_css_util.CSS<{}, {
        fonts: {
            display: string;
            text: string;
        };
        fontWeights: {
            standard: number;
            heavy: number;
        };
        letterSpacings: {
            tightest: string;
            tighter: string;
            tight: string;
            normal: number;
            wide: string;
            wider: string;
            widest: string;
        };
        fontSizes: {
            0: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
        };
        colors: {
            primaryBrand: string;
            primaryMidnight: string;
            white: string;
            neutral100: string;
            neutral200: string;
            neutral300: string;
            neutral400: string;
            neutral500: string;
            neutral600: string;
            neutral700: string;
            neutral800: string;
            neutral900: string;
            midnight100: string;
            midnight300: string;
            midnight500: string;
            midnight700: string;
            midnight900: string;
            accentOrange: string;
            accentOrangeDark: string;
            accentPink: string;
            accentPurple: string;
            accentNavy: string;
            accentRoyal: string;
            accentCyan: string;
            accentSky: string;
            accentTeal: string;
            accentLime: string;
        };
        lineHeights: {
            tighter: string;
            tight: string;
            normal: string;
            wide: string;
        };
        media: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xs1: string;
            xs2: string;
            xs3: string;
            sm1: string;
            sm2: string;
            sm3: string;
            md1: string;
            md2: string;
            md3: string;
            lg1: string;
            lg2: string;
            lg3: string;
            xl1: string;
            xl2: string;
            xl3: string;
        };
    }, _stitches_react_types_config.DefaultThemeMap, {
        typeStyle: (styleName: any) => {
            fontSize: string;
            fontWeight: string;
            fontFamily: string;
            lineHeight: string;
            letterSpacing: string;
        } | {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
            letterSpacing: string;
            lineHeight?: undefined;
        } | {
            fontSize: string;
            fontFamily: string;
            letterSpacing: string;
            fontWeight?: undefined;
            lineHeight?: undefined;
        } | {
            fontSize: string;
            fontFamily: string;
            fontWeight?: undefined;
            lineHeight?: undefined;
            letterSpacing?: undefined;
        } | {
            fontSize?: undefined;
            fontWeight?: undefined;
            fontFamily?: undefined;
            lineHeight?: undefined;
            letterSpacing?: undefined;
        };
    }>;
} : K extends `@property ${string}` ? _stitches_react_types_css.AtRule.Property : _stitches_react_types_css_util.CSS<{}, {
    fonts: {
        display: string;
        text: string;
    };
    fontWeights: {
        standard: number;
        heavy: number;
    };
    letterSpacings: {
        tightest: string;
        tighter: string;
        tight: string;
        normal: number;
        wide: string;
        wider: string;
        widest: string;
    };
    fontSizes: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
    };
    colors: {
        primaryBrand: string;
        primaryMidnight: string;
        white: string;
        neutral100: string;
        neutral200: string;
        neutral300: string;
        neutral400: string;
        neutral500: string;
        neutral600: string;
        neutral700: string;
        neutral800: string;
        neutral900: string;
        midnight100: string;
        midnight300: string;
        midnight500: string;
        midnight700: string;
        midnight900: string;
        accentOrange: string;
        accentOrangeDark: string;
        accentPink: string;
        accentPurple: string;
        accentNavy: string;
        accentRoyal: string;
        accentCyan: string;
        accentSky: string;
        accentTeal: string;
        accentLime: string;
    };
    lineHeights: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
    };
    media: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xs1: string;
        xs2: string;
        xs3: string;
        sm1: string;
        sm2: string;
        sm3: string;
        md1: string;
        md2: string;
        md3: string;
        lg1: string;
        lg2: string;
        lg3: string;
        xl1: string;
        xl2: string;
        xl3: string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    typeStyle: (styleName: any) => {
        fontSize: string;
        fontWeight: string;
        fontFamily: string;
        lineHeight: string;
        letterSpacing: string;
    } | {
        fontSize: string;
        fontFamily: string;
        fontWeight: string;
        letterSpacing: string;
        lineHeight?: undefined;
    } | {
        fontSize: string;
        fontFamily: string;
        letterSpacing: string;
        fontWeight?: undefined;
        lineHeight?: undefined;
    } | {
        fontSize: string;
        fontFamily: string;
        fontWeight?: undefined;
        lineHeight?: undefined;
        letterSpacing?: undefined;
    } | {
        fontSize?: undefined;
        fontWeight?: undefined;
        fontFamily?: undefined;
        lineHeight?: undefined;
        letterSpacing?: undefined;
    };
}>; })[]) => () => string;
declare const theme: string & {
    className: string;
    selector: string;
} & {
    fonts: {
        display: _stitches_react_types_theme.Token<"display", string, "fonts", "">;
        text: _stitches_react_types_theme.Token<"text", string, "fonts", "">;
    };
    fontWeights: {
        standard: _stitches_react_types_theme.Token<"standard", string, "fontWeights", "">;
        heavy: _stitches_react_types_theme.Token<"heavy", string, "fontWeights", "">;
    };
    letterSpacings: {
        tightest: _stitches_react_types_theme.Token<"tightest", string, "letterSpacings", "">;
        tighter: _stitches_react_types_theme.Token<"tighter", string, "letterSpacings", "">;
        tight: _stitches_react_types_theme.Token<"tight", string, "letterSpacings", "">;
        normal: _stitches_react_types_theme.Token<"normal", string, "letterSpacings", "">;
        wide: _stitches_react_types_theme.Token<"wide", string, "letterSpacings", "">;
        wider: _stitches_react_types_theme.Token<"wider", string, "letterSpacings", "">;
        widest: _stitches_react_types_theme.Token<"widest", string, "letterSpacings", "">;
    };
    fontSizes: {
        0: _stitches_react_types_theme.Token<"0", string, "fontSizes", "">;
        1: _stitches_react_types_theme.Token<"1", string, "fontSizes", "">;
        2: _stitches_react_types_theme.Token<"2", string, "fontSizes", "">;
        3: _stitches_react_types_theme.Token<"3", string, "fontSizes", "">;
        4: _stitches_react_types_theme.Token<"4", string, "fontSizes", "">;
        5: _stitches_react_types_theme.Token<"5", string, "fontSizes", "">;
        6: _stitches_react_types_theme.Token<"6", string, "fontSizes", "">;
        7: _stitches_react_types_theme.Token<"7", string, "fontSizes", "">;
    };
    colors: {
        primaryBrand: _stitches_react_types_theme.Token<"primaryBrand", string, "colors", "">;
        primaryMidnight: _stitches_react_types_theme.Token<"primaryMidnight", string, "colors", "">;
        white: _stitches_react_types_theme.Token<"white", string, "colors", "">;
        neutral100: _stitches_react_types_theme.Token<"neutral100", string, "colors", "">;
        neutral200: _stitches_react_types_theme.Token<"neutral200", string, "colors", "">;
        neutral300: _stitches_react_types_theme.Token<"neutral300", string, "colors", "">;
        neutral400: _stitches_react_types_theme.Token<"neutral400", string, "colors", "">;
        neutral500: _stitches_react_types_theme.Token<"neutral500", string, "colors", "">;
        neutral600: _stitches_react_types_theme.Token<"neutral600", string, "colors", "">;
        neutral700: _stitches_react_types_theme.Token<"neutral700", string, "colors", "">;
        neutral800: _stitches_react_types_theme.Token<"neutral800", string, "colors", "">;
        neutral900: _stitches_react_types_theme.Token<"neutral900", string, "colors", "">;
        midnight100: _stitches_react_types_theme.Token<"midnight100", string, "colors", "">;
        midnight300: _stitches_react_types_theme.Token<"midnight300", string, "colors", "">;
        midnight500: _stitches_react_types_theme.Token<"midnight500", string, "colors", "">;
        midnight700: _stitches_react_types_theme.Token<"midnight700", string, "colors", "">;
        midnight900: _stitches_react_types_theme.Token<"midnight900", string, "colors", "">;
        accentOrange: _stitches_react_types_theme.Token<"accentOrange", string, "colors", "">;
        accentOrangeDark: _stitches_react_types_theme.Token<"accentOrangeDark", string, "colors", "">;
        accentPink: _stitches_react_types_theme.Token<"accentPink", string, "colors", "">;
        accentPurple: _stitches_react_types_theme.Token<"accentPurple", string, "colors", "">;
        accentNavy: _stitches_react_types_theme.Token<"accentNavy", string, "colors", "">;
        accentRoyal: _stitches_react_types_theme.Token<"accentRoyal", string, "colors", "">;
        accentCyan: _stitches_react_types_theme.Token<"accentCyan", string, "colors", "">;
        accentSky: _stitches_react_types_theme.Token<"accentSky", string, "colors", "">;
        accentTeal: _stitches_react_types_theme.Token<"accentTeal", string, "colors", "">;
        accentLime: _stitches_react_types_theme.Token<"accentLime", string, "colors", "">;
    };
    lineHeights: {
        tighter: _stitches_react_types_theme.Token<"tighter", string, "lineHeights", "">;
        tight: _stitches_react_types_theme.Token<"tight", string, "lineHeights", "">;
        normal: _stitches_react_types_theme.Token<"normal", string, "lineHeights", "">;
        wide: _stitches_react_types_theme.Token<"wide", string, "lineHeights", "">;
    };
    media: {
        xs: _stitches_react_types_theme.Token<"xs", string, "media", "">;
        sm: _stitches_react_types_theme.Token<"sm", string, "media", "">;
        md: _stitches_react_types_theme.Token<"md", string, "media", "">;
        lg: _stitches_react_types_theme.Token<"lg", string, "media", "">;
        xl: _stitches_react_types_theme.Token<"xl", string, "media", "">;
        xs1: _stitches_react_types_theme.Token<"xs1", string, "media", "">;
        xs2: _stitches_react_types_theme.Token<"xs2", string, "media", "">;
        xs3: _stitches_react_types_theme.Token<"xs3", string, "media", "">;
        sm1: _stitches_react_types_theme.Token<"sm1", string, "media", "">;
        sm2: _stitches_react_types_theme.Token<"sm2", string, "media", "">;
        sm3: _stitches_react_types_theme.Token<"sm3", string, "media", "">;
        md1: _stitches_react_types_theme.Token<"md1", string, "media", "">;
        md2: _stitches_react_types_theme.Token<"md2", string, "media", "">;
        md3: _stitches_react_types_theme.Token<"md3", string, "media", "">;
        lg1: _stitches_react_types_theme.Token<"lg1", string, "media", "">;
        lg2: _stitches_react_types_theme.Token<"lg2", string, "media", "">;
        lg3: _stitches_react_types_theme.Token<"lg3", string, "media", "">;
        xl1: _stitches_react_types_theme.Token<"xl1", string, "media", "">;
        xl2: _stitches_react_types_theme.Token<"xl2", string, "media", "">;
        xl3: _stitches_react_types_theme.Token<"xl3", string, "media", "">;
    };
};
declare const keyframes: (style: {
    [offset: string]: _stitches_react_types_css_util.CSS<{}, {
        fonts: {
            display: string;
            text: string;
        };
        fontWeights: {
            standard: number;
            heavy: number;
        };
        letterSpacings: {
            tightest: string;
            tighter: string;
            tight: string;
            normal: number;
            wide: string;
            wider: string;
            widest: string;
        };
        fontSizes: {
            0: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
        };
        colors: {
            primaryBrand: string;
            primaryMidnight: string;
            white: string;
            neutral100: string;
            neutral200: string;
            neutral300: string;
            neutral400: string;
            neutral500: string;
            neutral600: string;
            neutral700: string;
            neutral800: string;
            neutral900: string;
            midnight100: string;
            midnight300: string;
            midnight500: string;
            midnight700: string;
            midnight900: string;
            accentOrange: string;
            accentOrangeDark: string;
            accentPink: string;
            accentPurple: string;
            accentNavy: string;
            accentRoyal: string;
            accentCyan: string;
            accentSky: string;
            accentTeal: string;
            accentLime: string;
        };
        lineHeights: {
            tighter: string;
            tight: string;
            normal: string;
            wide: string;
        };
        media: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xs1: string;
            xs2: string;
            xs3: string;
            sm1: string;
            sm2: string;
            sm3: string;
            md1: string;
            md2: string;
            md3: string;
            lg1: string;
            lg2: string;
            lg3: string;
            xl1: string;
            xl2: string;
            xl3: string;
        };
    }, _stitches_react_types_config.DefaultThemeMap, {
        typeStyle: (styleName: any) => {
            fontSize: string;
            fontWeight: string;
            fontFamily: string;
            lineHeight: string;
            letterSpacing: string;
        } | {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
            letterSpacing: string;
            lineHeight?: undefined;
        } | {
            fontSize: string;
            fontFamily: string;
            letterSpacing: string;
            fontWeight?: undefined;
            lineHeight?: undefined;
        } | {
            fontSize: string;
            fontFamily: string;
            fontWeight?: undefined;
            lineHeight?: undefined;
            letterSpacing?: undefined;
        } | {
            fontSize?: undefined;
            fontWeight?: undefined;
            fontFamily?: undefined;
            lineHeight?: undefined;
            letterSpacing?: undefined;
        };
    }>;
}) => {
    (): string;
    name: string;
};
declare const getCssText: () => string;

export { Button, getCssText, globalCss, keyframes, stitches, styled, theme, typeStyleNames };
