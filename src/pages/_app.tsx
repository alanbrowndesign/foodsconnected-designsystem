import { AppProps } from 'next/app';
import styles from '@/styles/globalStyles';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consisten layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  styles();
  return <Component {...pageProps} />;
}

export default MyApp;
