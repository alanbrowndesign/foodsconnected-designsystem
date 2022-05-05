import { styled, config, darkTheme, css } from '@/styles/stitches.config';
import { getSpaces, getTokens } from 'connected-ui-edge';
const tokens = config.theme;
import Head from 'next/head';
import { forwardRef } from 'react';

const StyledPageWrapper = styled('div', {
  '--sidebar-collapsed-width': '$space$4xl',
  '--sidebar-expanded-width': 'calc($space$5xl * 3)',
  '--sidebar-width': 'var(--sidebar-collapsed-width)',
  [`.${darkTheme}`]: {
    visibility: 'visible',
    color: '$green3',
  },
  variants: {
    fillHeight: {
      true: {
        height: '100vh',
      },
    },
    background: {
      ...getTokens(tokens.colors, 'backgroundColor'),
    },
    gap: {
      ...getSpaces(),
    },
    sideBarActive: {
      true: {
        '--sidebar-width': 'var(--sidebar-expanded-width)',
      },
    },
  },
  defaultVariants: {
    fillHeight: true,
  },
});

type PageWrapperProps = {
  children: React.ReactNode;
  background?: string;
  gap?: number;
  title?: string;
  sideBarActive?: any;
  css?: any;
};

export const PageWrapper = forwardRef((props: PageWrapperProps, ref: any) => {
  const { css, title, children, background, gap, sideBarActive, ...rest } =
    props;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <StyledPageWrapper
        ref={ref}
        css={{
          ...css,
        }}
        background={background}
        gap={gap}
        sideBarActive={sideBarActive}
        {...rest}
      >
        {children}
      </StyledPageWrapper>
    </>
  );
});

export const PageWrapper2 = ({
  css,
  title,
  children,
  background,
  gap,
  ...rest
}: PageWrapperProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <StyledPageWrapper
        css={{
          ...css,
        }}
        background={background}
        gap={gap}
        {...rest}
      >
        {children}
      </StyledPageWrapper>
    </>
  );
};

PageWrapper.defaultProps = {
  title: 'Foods Connected UI',
};
