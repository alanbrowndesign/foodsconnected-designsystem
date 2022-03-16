/// <reference types="react" />
export type { CSS } from "@stitches/react/types/css-util";
export declare const typeStyleNames: string[];
export declare const stitches: import("@stitches/react/types/stitches").default<"", {}, {
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
}, import("@stitches/react/types/config").DefaultThemeMap, {
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
export declare const css: <Composers extends (string | import("@stitches/react/types/util").Function | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
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
}, import("@stitches/react/types/config").DefaultThemeMap, {
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
}>>(...composers: { [K in keyof Composers]: Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => import("@stitches/react/types/styled-component").CssComponent<import("@stitches/react/types/styled-component").StyledComponentType<Composers>, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, CSS>, styled: <Type extends import("@stitches/react/types/util").Function | keyof JSX.IntrinsicElements | import("react").ComponentType<any>, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
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
}, import("@stitches/react/types/config").DefaultThemeMap, {
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
}>>(type: Type, ...composers: { [K in keyof Composers]: Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, import("@stitches/react/types/css-util").CSS<{}, {
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
}, import("@stitches/react/types/config").DefaultThemeMap, {
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
}>>, globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? import("@stitches/react/types/css").AtRule.FontFace | import("@stitches/react/types/css").AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: import("@stitches/react/types/css-util").CSS<{}, {
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
    }, import("@stitches/react/types/config").DefaultThemeMap, {
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
} : K extends `@property ${string}` ? import("@stitches/react/types/css").AtRule.Property : import("@stitches/react/types/css-util").CSS<{}, {
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
}, import("@stitches/react/types/config").DefaultThemeMap, {
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
}>; })[]) => () => string, theme: string & {
    className: string;
    selector: string;
} & {
    fonts: {
        display: import("@stitches/react/types/theme").Token<"display", string, "fonts", "">;
        text: import("@stitches/react/types/theme").Token<"text", string, "fonts", "">;
    };
    fontWeights: {
        standard: import("@stitches/react/types/theme").Token<"standard", string, "fontWeights", "">;
        heavy: import("@stitches/react/types/theme").Token<"heavy", string, "fontWeights", "">;
    };
    letterSpacings: {
        tightest: import("@stitches/react/types/theme").Token<"tightest", string, "letterSpacings", "">;
        tighter: import("@stitches/react/types/theme").Token<"tighter", string, "letterSpacings", "">;
        tight: import("@stitches/react/types/theme").Token<"tight", string, "letterSpacings", "">;
        normal: import("@stitches/react/types/theme").Token<"normal", string, "letterSpacings", "">;
        wide: import("@stitches/react/types/theme").Token<"wide", string, "letterSpacings", "">;
        wider: import("@stitches/react/types/theme").Token<"wider", string, "letterSpacings", "">;
        widest: import("@stitches/react/types/theme").Token<"widest", string, "letterSpacings", "">;
    };
    fontSizes: {
        0: import("@stitches/react/types/theme").Token<"0", string, "fontSizes", "">;
        1: import("@stitches/react/types/theme").Token<"1", string, "fontSizes", "">;
        2: import("@stitches/react/types/theme").Token<"2", string, "fontSizes", "">;
        3: import("@stitches/react/types/theme").Token<"3", string, "fontSizes", "">;
        4: import("@stitches/react/types/theme").Token<"4", string, "fontSizes", "">;
        5: import("@stitches/react/types/theme").Token<"5", string, "fontSizes", "">;
        6: import("@stitches/react/types/theme").Token<"6", string, "fontSizes", "">;
        7: import("@stitches/react/types/theme").Token<"7", string, "fontSizes", "">;
    };
    colors: {
        primaryBrand: import("@stitches/react/types/theme").Token<"primaryBrand", string, "colors", "">;
        primaryMidnight: import("@stitches/react/types/theme").Token<"primaryMidnight", string, "colors", "">;
        white: import("@stitches/react/types/theme").Token<"white", string, "colors", "">;
        neutral100: import("@stitches/react/types/theme").Token<"neutral100", string, "colors", "">;
        neutral200: import("@stitches/react/types/theme").Token<"neutral200", string, "colors", "">;
        neutral300: import("@stitches/react/types/theme").Token<"neutral300", string, "colors", "">;
        neutral400: import("@stitches/react/types/theme").Token<"neutral400", string, "colors", "">;
        neutral500: import("@stitches/react/types/theme").Token<"neutral500", string, "colors", "">;
        neutral600: import("@stitches/react/types/theme").Token<"neutral600", string, "colors", "">;
        neutral700: import("@stitches/react/types/theme").Token<"neutral700", string, "colors", "">;
        neutral800: import("@stitches/react/types/theme").Token<"neutral800", string, "colors", "">;
        neutral900: import("@stitches/react/types/theme").Token<"neutral900", string, "colors", "">;
        midnight100: import("@stitches/react/types/theme").Token<"midnight100", string, "colors", "">;
        midnight300: import("@stitches/react/types/theme").Token<"midnight300", string, "colors", "">;
        midnight500: import("@stitches/react/types/theme").Token<"midnight500", string, "colors", "">;
        midnight700: import("@stitches/react/types/theme").Token<"midnight700", string, "colors", "">;
        midnight900: import("@stitches/react/types/theme").Token<"midnight900", string, "colors", "">;
        accentOrange: import("@stitches/react/types/theme").Token<"accentOrange", string, "colors", "">;
        accentOrangeDark: import("@stitches/react/types/theme").Token<"accentOrangeDark", string, "colors", "">;
        accentPink: import("@stitches/react/types/theme").Token<"accentPink", string, "colors", "">;
        accentPurple: import("@stitches/react/types/theme").Token<"accentPurple", string, "colors", "">;
        accentNavy: import("@stitches/react/types/theme").Token<"accentNavy", string, "colors", "">;
        accentRoyal: import("@stitches/react/types/theme").Token<"accentRoyal", string, "colors", "">;
        accentCyan: import("@stitches/react/types/theme").Token<"accentCyan", string, "colors", "">;
        accentSky: import("@stitches/react/types/theme").Token<"accentSky", string, "colors", "">;
        accentTeal: import("@stitches/react/types/theme").Token<"accentTeal", string, "colors", "">;
        accentLime: import("@stitches/react/types/theme").Token<"accentLime", string, "colors", "">;
    };
    lineHeights: {
        tighter: import("@stitches/react/types/theme").Token<"tighter", string, "lineHeights", "">;
        tight: import("@stitches/react/types/theme").Token<"tight", string, "lineHeights", "">;
        normal: import("@stitches/react/types/theme").Token<"normal", string, "lineHeights", "">;
        wide: import("@stitches/react/types/theme").Token<"wide", string, "lineHeights", "">;
    };
    media: {
        xs: import("@stitches/react/types/theme").Token<"xs", string, "media", "">;
        sm: import("@stitches/react/types/theme").Token<"sm", string, "media", "">;
        md: import("@stitches/react/types/theme").Token<"md", string, "media", "">;
        lg: import("@stitches/react/types/theme").Token<"lg", string, "media", "">;
        xl: import("@stitches/react/types/theme").Token<"xl", string, "media", "">;
        xs1: import("@stitches/react/types/theme").Token<"xs1", string, "media", "">;
        xs2: import("@stitches/react/types/theme").Token<"xs2", string, "media", "">;
        xs3: import("@stitches/react/types/theme").Token<"xs3", string, "media", "">;
        sm1: import("@stitches/react/types/theme").Token<"sm1", string, "media", "">;
        sm2: import("@stitches/react/types/theme").Token<"sm2", string, "media", "">;
        sm3: import("@stitches/react/types/theme").Token<"sm3", string, "media", "">;
        md1: import("@stitches/react/types/theme").Token<"md1", string, "media", "">;
        md2: import("@stitches/react/types/theme").Token<"md2", string, "media", "">;
        md3: import("@stitches/react/types/theme").Token<"md3", string, "media", "">;
        lg1: import("@stitches/react/types/theme").Token<"lg1", string, "media", "">;
        lg2: import("@stitches/react/types/theme").Token<"lg2", string, "media", "">;
        lg3: import("@stitches/react/types/theme").Token<"lg3", string, "media", "">;
        xl1: import("@stitches/react/types/theme").Token<"xl1", string, "media", "">;
        xl2: import("@stitches/react/types/theme").Token<"xl2", string, "media", "">;
        xl3: import("@stitches/react/types/theme").Token<"xl3", string, "media", "">;
    };
}, keyframes: (style: {
    [offset: string]: import("@stitches/react/types/css-util").CSS<{}, {
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
    }, import("@stitches/react/types/config").DefaultThemeMap, {
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
}, getCssText: () => string;
