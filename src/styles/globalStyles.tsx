import tw, { globalStyles, theme } from 'twin.macro';

import { globalCss } from './stitches.config';

const customStyles1 = {
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },

  ':root': {
    '--fluid-min-width': 320,
    '--fluid-max-width': 1440,
    '--fluid-screen': '100vw',
    '--fluid-bp':
      'calc((var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) / (var(--fluid-max-width) - var(--fluid-min-width)))',
  },
  '@media screen and (min-width: 1440px)': {
    ':root': {
      '--fluid-screen': 'calc(var(--fluid-max-width) * 1px)',
    },
  },
};

const customStyles2 = {
  ':root': {
    '--f--3-min': '11.39',
    '--f--3-max': '10.42',
    '--step--3': `calc(
                    ((var(--f--3-min) / 16) * 1rem) + (var(--f--3-max) - var(--f--3-min)) *
                    var(--fluid-bp)
    )`,

    '--f--2-min': '12.76',
    '--f--2-max': '12.50',
    '--step--2': `calc(
                    ((var(--f--2-min) / 16) * 1rem) + (var(--f--2-max) - var(--f--2-min)) *
                    var(--fluid-bp)
    )`,

    '--f--1-min': '14.29',
    '--f--1-max': '15.00',
    '--step--1': `calc(
                    ((var(--f--1-min) / 16) * 1rem) + (var(--f--1-max) - var(--f--1-min)) *
                    var(--fluid-bp)
    )`,

    '--f-0-min': '16.00',
    '--f-0-max': '18.00',
    '--step-0': `calc(
                  ((var(--f-0-min) / 16) * 1rem) + (var(--f-0-max) - var(--f-0-min)) *
                  var(--fluid-bp)
    )`,

    '--f-1-min': '17.92',
    '--f-1-max': '21.60',
    '--step-1': `calc(
                  ((var(--f-1-min) / 16) * 1rem) + (var(--f-1-max) - var(--f-1-min)) *
                  var(--fluid-bp)
    )`,

    '--f-2-min': '20.07',
    '--f-2-max': '25.92',
    '--step-2': `calc(
                  ((var(--f-2-min) / 16) * 1rem) + (var(--f-2-max) - var(--f-2-min)) *
                  var(--fluid-bp)
    )`,

    '--f-3-min': '22.48',
    '--f-3-max': '31.10',
    '--step-3': `calc(
                  ((var(--f-3-min) / 16) * 1rem) + (var(--f-3-max) - var(--f-3-min)) *
                  var(--fluid-bp)
    )`,

    '--f-4-min': '25.18',
    '--f-4-max': '37.32',
    '--step-4': `calc(
      ((var(--f-4-min) / 16) * 1rem) + (var(--f-4-max) - var(--f-4-min)) *
        var(--fluid-bp)
    )`,

    '--f-5-min': '28.20',
    '--f-5-max': '44.79',
    '--step-5': `calc(
                  ((var(--f-5-min) / 16) * 1rem) + (var(--f-5-max) - var(--f-5-min)) *
                  var(--fluid-bp)
    )`,

    '--f-6-min': '31.58',
    '--f-6-max': '53.75',
    '--step-6': `calc(
      ((var(--f-6-min) / 16) * 1rem) + (var(--f-6-max) - var(--f-6-min)) *
        var(--fluid-bp)
    )`,

    '--f-7-min': '35.37',
    '--f-7-max': '64.50',
    '--step-7': `calc(
                  ((var(--f-7-min) / 16) * 1rem) + (var(--f-7-max) - var(--f-7-min)) *
                  var(--fluid-bp)
    )`,
  },
};

const styles = () => {
  globalCss(customStyles1)();
  globalCss(customStyles2)();
  globalCss(globalStyles as Record<any, any>)();
};

export default styles;
