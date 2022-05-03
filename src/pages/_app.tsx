import { AppProps } from 'next/app';
import { stitchesStyles } from 'connected-ui-edge';
import { localStyles } from '@/styles/localStyles';
import { ThemeProvider } from 'next-themes';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consisten layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  localStyles();
  stitchesStyles();
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
