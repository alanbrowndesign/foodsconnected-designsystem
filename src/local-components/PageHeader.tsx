import { styled, darkTheme } from '@/styles/stitches.config';
import tw from 'twin.macro';
import { blue } from '@radix-ui/colors';
import { BurgerIcon } from './BurgerIcon';

export const LogoHead = styled('div', {
  ...tw`text-subhead flex items-center`,
  gap: '$3xs',
  paddingInline: '$xs',
  height: '$space$3xl',
  width: 'fit-content',
  background: '$primaryIndigo',
  color: 'white',
  whiteSpace: 'nowrap',

  [`.${darkTheme} &`]: {
    background: blue.blue11,
  },

  '> svg': {
    width: '$space$s',
    aspectRatio: '1 / 1',
    flexShrink: 0,
    [`.${darkTheme} &`]: {
      path: {
        fill: blue.blue6,
      },
    },
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

const StyledHeader = styled('header', {
  height: '$space$3xl',
  background: '$slate1',
  boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.1)',
  [`.${darkTheme} &`]: {
    background: '$indigo2',
  },
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingRight: '$xs',
});

export const PageHeader = (props: any) => {
  const { onBurgerClick, burgerActive, children } = props;
  return (
    <StyledHeader>
      <LogoHead>
        <FC_Logo />
        Supplier approval
        <BurgerIcon isActive={burgerActive} onClick={onBurgerClick} />
      </LogoHead>
      {children}
    </StyledHeader>
  );
};
