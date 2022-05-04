// stitches.config.ts
import { createStitches, createTheme } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import {
  stitchesTheme,
  stitchesMedia,
  stitchesUtils,
  stitchesThemeMap,
  stitchesDarkColors,
} from 'connected-ui-edge';

export const { styled, css, theme, globalCss, config, keyframes, getCssText } =
  createStitches({
    // prefix: 'app',
    themeMap: {
      // Map these properties to the `space` scale
      ...stitchesThemeMap,
    },
    media: {
      ...stitchesMedia,
    },
    theme: {
      ...stitchesTheme,
    },
    utils: {
      ...stitchesUtils,
    },
  });

export const darkTheme = createTheme('dark', {
  ...stitchesDarkColors,
});

type CSS = Stitches.CSS<typeof config>;
export type { CSS } from '@stitches/react/types/css-util';
