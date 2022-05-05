import { styled, darkTheme } from '@/styles/stitches.config';
import tw from 'twin.macro';
import { blue } from '@radix-ui/colors';
import { forwardRef } from 'react';

// burger icon
const StyledBurgerIcon = styled('button', {
  position: 'relative',
  display: 'grid',
  placeItems: 'center',
  width: '$space$xl',
  height: '$space$xl',
  zIndex: 1000,
  alignSelf: 'center',
  backgroundSize: '100%',
  background: '#03003C',
  cursor: 'pointer',
  [`.${darkTheme} &`]: {
    background: '$blue8',
  },
  padding: 0,
  borderRadius: '999rem',
  border: 0,
  rect: {
    fill: 'white',
    transition: 'fill 0.25s ease',
  },
  '.x-left, .x-right': {
    transformOrigin: '50% 50%',
    transition: 'transform 0.3s ease',
  },

  '.rest': {
    opacity: 1,
    transition: 'opacity 0.2s linear',
  },

  '> svg': {
    width: '$space$xs',
    height: '$space$xs',
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
  ref?: any;
};

export const BurgerIcon = forwardRef((props: BurgerIconProps, ref: any) => {
  const { onClick, isActive } = props;
  return (
    <StyledBurgerIcon
      onClick={onClick}
      active={isActive}
      aria-label='Open the menu'
      ref={ref}
    >
      <svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <rect
          className='x-left'
          x={6}
          y={4}
          width={18}
          height={3}
          rx='1.5'
          fill='#fff'
        />
        <rect
          className='x-right'
          y={11}
          width={24}
          height={3}
          rx='1.5'
          fill='#fff'
        />
        <rect
          className='rest'
          x={11}
          y={18}
          width={13}
          height={3}
          rx='1.5'
          fill='#fff'
        />
      </svg>
    </StyledBurgerIcon>
  );
});
