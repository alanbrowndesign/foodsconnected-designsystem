import type { NextPage } from 'next';
import { styled, darkTheme, globalCss } from '@/styles/stitches.config';
import tw from 'twin.macro';
import Layout from '@/components/layout/Layout';
import { Container, Button } from 'connected-ui-edge';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const globalPageStyles = globalCss({
  body: {
    background: '$slate3',
  },
});

const FC_Logo = () => {
  return (
    <svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
      <path
        d='M32 0H0v8.7h32V0Zm-8.3 11.5H0v8.6h23.7v-8.6ZM15.4 23H0v8.6h15.4V23Z'
        fill='#1C66DE'
      />
    </svg>
  );
};

// burger icon
const StyledBurgerIcon = styled('button', {
  position: 'relative',
  width: '$space$xl',
  height: '$space$xl',
  zIndex: 1000,
  alignSelf: 'center',
  backgroundSize: '100%',
  background: '#03003C',
  padding: 0,
  borderRadius: '999rem',
  border: 0,
  rect: {
    fill: 'white',
    transition: 'fill 0.25s ease',
  },
  '.x-left, .x-right': {
    transformOrigin: '50% 50%',
    transition: 'transform 0.25s ease',
  },

  '.rest': {
    opacity: 1,
    transition: 'opacity 0.125s ease',
  },

  '> svg': {
    width: 'min(100%, 24px)',
    height: 'min(100%, 24px)',
    // height: '100%',
    aspectRatio: '1/1',
  },

  variants: {
    active: {
      true: {
        '.x-left': {
          transform: 'rotate(45deg) translate(-6px, 6px)',
          width: 24,
        },
        '.x-right': {
          transform: 'rotate(-45deg) translate(0, -1px)',
        },
        '.rest': {
          opacity: 0,
        },
        rect: {
          fill: 'white',
        },
      },
    },
  },
});

type BurgerIconProps = {
  onClick?: any;
  isActive?: any;
};

const BurgerIcon = (props: BurgerIconProps) => {
  const { onClick, isActive } = props;
  return (
    <StyledBurgerIcon
      onClick={onClick}
      active={isActive}
      aria-label='Open the menu'
    >
      <svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <rect x={6} y={4} width={18} height={3} rx='1.5' fill='#fff' />
        <rect y={11} width={24} height={3} rx='1.5' fill='#fff' />
        <rect x={11} y={18} width={13} height={3} rx='1.5' fill='#fff' />
      </svg>
    </StyledBurgerIcon>
  );
};

const LogoHead = styled('div', {
  ...tw`text-subhead flex items-center`,
  gap: '$3xs',
  paddingInline: '$xs',
  height: '$space$3xl',
  width: 'fit-content',
  background: '$primaryMidnight',
  color: 'white',
  whiteSpace: 'nowrap',

  '> svg': {
    width: '$space$s',
    aspectRatio: '1 / 1',
    flexShrink: 0,
  },
});
const StyledHeader = styled('header', {
  height: '$space$3xl',
  background: 'white',
});

const Dashboard: NextPage = () => {
  globalPageStyles();

  // Theming
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Layout>
      {/* Header */}
      <StyledHeader>
        <LogoHead>
          <FC_Logo />
          Supplier approval
          <BurgerIcon />
        </LogoHead>
      </StyledHeader>
      <Container sidePadding='tight'>
        <div tw='mt-m'>
          <h1 tw='text-title1 text-indigo-12'>Dashboards</h1>
        </div>
      </Container>
    </Layout>
  );
};

export default Dashboard;
