import { styled, config, darkTheme } from '@/styles/stitches.config';
import { getSpaces, getTokens } from 'connected-ui-edge';
const tokens = config.theme;
import Head from 'next/head';

const StyledLayout = styled('div', {
  variants: {
    background: {
      ...getTokens(tokens.colors, 'backgroundColor'),
    },
    gap: {
      ...getSpaces(),
    },
  },
});

type LayoutProps = {
  children: React.ReactNode;
  background?: string;
  gap?: number;
  title?: string;
  dark?: boolean;
};

export default function Layout({
  title,
  children,
  background,
  gap,
  dark,
}: LayoutProps) {
  // Put Header or Footer Here
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <StyledLayout
        gap={gap}
        background={background}
        className={dark ? darkTheme : ''}
      >
        {children}
      </StyledLayout>
    </>
  );
}

Layout.defaultProps = {
  title: 'Foods Connected UI',
  theme: 'light',
};
