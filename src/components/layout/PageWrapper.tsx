import { styled, config, darkTheme } from '@/styles/stitches.config';
import { getSpaces, getTokens } from 'connected-ui-edge';
const tokens = config.theme;
import Head from 'next/head';

const StyledPageWrapper = styled('div', {
  [`.${darkTheme}`]: {
    visibility: 'visible',
  },
  variants: {
    background: {
      ...getTokens(tokens.colors, 'backgroundColor'),
    },
    gap: {
      ...getSpaces(),
    },
  },
});

type PageWrapperProps = {
  children: React.ReactNode;
  background?: string;
  gap?: number;
  title?: string;
};

export const PageWrapper = (props: PageWrapperProps) => {
  // Put Header or Footer Here
  const { title, children, background, gap } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <StyledPageWrapper gap={gap} background={background}>
        {children}
      </StyledPageWrapper>
    </>
  );
};

PageWrapper.defaultProps = {
  title: 'Foods Connected UI',
};
