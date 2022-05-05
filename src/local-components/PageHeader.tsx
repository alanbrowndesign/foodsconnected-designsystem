import { styled, darkTheme, keyframes } from '@/styles/stitches.config';
import tw from 'twin.macro';
import { blue } from '@radix-ui/colors';
import { BurgerIcon } from './BurgerIcon';
import { useRef, useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import { gsap } from 'gsap';

const MenuChevron = () => {
  return (
    <svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 15'>
      <g clipPath='url(#a)'>
        <path
          className='chevronPath'
          d='M17.87 10.84 26.1 2.6a5.5 5.5 0 0 1 7.78 0l8.24 8.24a12.5 12.5 0 0 0 8.84 3.66h8.53v8H.5v-8h8.53c3.31 0 6.5-1.32 8.84-3.66Z'
          fill='#fff'
          stroke='#E6E8EB'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h60v15H0z' />
        </clipPath>
      </defs>
    </svg>
  );
};

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
  '--offset-top': 'calc($space$3xl + $space$4xs)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  gridArea: 'header',
  height: '$space$3xl',
  zIndex: 10,
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

const StyledMegaMenu = styled('div', {
  ...tw`absolute inset-x-3xs p-2xs`,
  '--offset-top': 'calc($space$3xl + $space$4xs)',
  top: 'calc(var(--offset-top) + 14px)',
  zIndex: 9,
  borderRadius: '$md',
  background: 'white',
  border: '1px solid $slate5',
  overflow: 'hidden',
  '.innerBox': {
    background: '$slate5',
    height: 'clamp(100px, 50vh, 300px)',
    '@sm': { height: '100%' },
    flex: '1',
    padding: '$2xs',
    borderRadius: '$xs',
  },
  [`.${darkTheme} &`]: {
    backgroundColor: '$indigo4',
    borderColor: '$indigo2',
    '.innerBox': {
      background: '$indigo6',
    },
  },
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  width: 1,
  whiteSpace: 'nowrap',
  '&.menu-visible': {
    clip: 'auto',
    clipPath: 'none',
    width: 'auto',
    height: 'calc(100vh - $space$6xl - 64px)',
    '@sm': {
      height: 'clamp(200px, 75vh, 600px)',
    },
    whiteSpace: 'normal',
    overflow: 'visible',
    '.menu-inner-content': {
      ...tw`absolute inset-2xs`,
      overflowY: 'scroll',
    },
  },
  filter: 'drop-shadow(0px 2px 18px rgba(0, 0, 0, 0.18))',
  opacity: 0,
  scale: 0.95,
  variants: {
    active: {
      true: {},
    },
  },
});

const StyledTracker = styled('div', {
  position: 'absolute',
  width: '$space$xl',
  height: 15,
  zIndex: 1001,
  top: -15,

  svg: {
    width: 60,
    height: 15,
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },

  '.chevronPath': {
    stroke: '$slate5',
  },

  [`.${darkTheme} &`]: {
    '.chevronPath': {
      fill: '$indigo4',
      stroke: '$indigo2',
    },
  },
});

export const PageHeader = (props: any) => {
  const { children } = props;
  const myRef: any = useRef(null);
  const { width, height } = useWindowSize();
  const [offsetBox, updateOffsetBox] = useState(0);
  const [menuActive, updateMenuActive] = useState(false);

  // animate menu in and out
  const megaMenu: any = useRef<HTMLElement>(null);
  useEffect(() => {
    if (megaMenu.current !== null) {
      if (menuActive) {
        gsap.to(megaMenu.current, {
          onStart: () => {
            megaMenu.current!.classList.add('menu-visible');
          },
          autoAlpha: 1,
          scale: 1,
          duration: 0.2,
          transformOrigin: `${offsetBox}px 0%`,
        });
      } else {
        gsap.to(megaMenu.current, {
          autoAlpha: 0,
          scale: 0.95,
          duration: 0.2,
          onComplete: () => {
            if (megaMenu.current != null) {
              megaMenu.current.classList.remove('menu-visible');
            }
          },
        });
      }
    }
  }, [menuActive]);

  useEffect(() => {
    console.log(myRef.current.offsetLeft);
    updateOffsetBox(myRef.current.offsetLeft);
  }, [width]);
  return (
    <>
      <StyledHeader>
        <LogoHead>
          <FC_Logo />
          Supplier approval
          <BurgerIcon
            ref={myRef}
            isActive={menuActive}
            onClick={() => {
              updateMenuActive(!menuActive);
              updateOffsetBox(myRef.current.offsetLeft);
            }}
          />
        </LogoHead>

        {children}
      </StyledHeader>
      <StyledMegaMenu active={menuActive} ref={megaMenu}>
        <StyledTracker
          css={{
            left: `calc(${offsetBox}px - $space$3xs)`,
          }}
        >
          <MenuChevron />
        </StyledTracker>
        <div className='menu-inner-content'>
          <div tw='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-xs height[100%]'>
            <div className='innerBox'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur minus nobis, aliquam ipsam minima vero tempora ea
                facere laborum maxime nemo suscipit, officiis quis? Quam
                cupiditate excepturi id nemo accusamus temporibus incidunt, hic,
                numquam sunt quia nesciunt eos deserunt.
              </p>
            </div>
            <div className='innerBox'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur minus nobis, aliquam ipsam minima vero tempora ea
                facere laborum maxime nemo suscipit, officiis quis? Quam
                cupiditate excepturi id nemo accusamus temporibus incidunt, hic,
                numquam sunt quia nesciunt eos deserunt.
              </p>
            </div>
            <div className='innerBox'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur minus nobis, aliquam ipsam minima vero tempora ea
                facere laborum maxime nemo suscipit, officiis quis? Quam
                cupiditate excepturi id nemo accusamus temporibus incidunt, hic,
                numquam sunt quia nesciunt eos deserunt.
              </p>
            </div>
            <div className='innerBox'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur minus nobis, aliquam ipsam minima vero tempora ea
                facere laborum maxime nemo suscipit, officiis quis? Quam
                cupiditate excepturi id nemo accusamus temporibus incidunt, hic,
                numquam sunt quia nesciunt eos deserunt.
              </p>
            </div>
          </div>
        </div>
      </StyledMegaMenu>
    </>
  );
};
