import { PageWrapper } from '@/components';
import { Text, Button, Container } from 'connected-ui-edge';
import tw from 'twin.macro';
import {
  styled,
  globalCss,
  darkTheme,
  keyframes,
} from '@/styles/stitches.config';
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { useTheme } from 'next-themes';
import { SearchBar, PageHeader, IconNav } from '@/local-components';
import { gsap } from 'gsap';

const transitionTime = 300;

const StyledSideBar = styled('div', {
  background: 'white',
  borderRight: '1px solid $slate7',
  filter: 'drop-shadow(0px 2px 12px rgba(0, 0, 0, 0.1))',
  [`.${darkTheme} &`]: {
    background: '$indigo2',
    borderColor: '$indigo3',
  },
  transition:
    'width 0.2s ease, background-color 0.3s linear, border-color 0.3s linear',
  gridArea: 'auto',
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  paddingTop: '$space$3xl',
  width: 'var(--sidebar-width)',

  variants: {
    hovering: {
      true: {
        backgroundColor: 'rgba(255,255,255,0.95)',
        width: 'var(--sidebar-expanded-width)',
        [`.${darkTheme} &`]: {
          backgroundColor: 'rgba(21, 25, 45, 0.95)',
        },
      },
    },
    expanded: {
      true: {
        // width: 'var(--sidebar-expanded-width)',
      },
    },
  },
});

const globalPageStyles = globalCss({
  '.toggling-theme': {
    '*, *::before, *::after': {
      transition: `
        color-scheme ${transitionTime}ms linear,
        color ${transitionTime}ms linear,
        background-color ${transitionTime}ms linear, fill ${transitionTime}ms linear,
        fill ${transitionTime}ms linear, fill ${transitionTime}ms linear,
        stroke ${transitionTime}ms linear, fill ${transitionTime}ms linear,
        border-color ${transitionTime}ms linear, fill ${transitionTime}ms linear
        `,
    },
  },
  body: {
    background: '$slate3',
    [`.${darkTheme} &`]: {
      background: '$indigo1',
    },
  },
});

const IconNavWrapper = () => {
  // Theming
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <IconNav
      onThemeToggle={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
        document.querySelector('html')?.classList.add('toggling-theme');
        setTimeout(() => {
          document.querySelector('html')?.classList.remove('toggling-theme');
        }, transitionTime);
      }}
    />
  );
};

const Icon_ExpandChevron = () => {
  return (
    <svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path
        d='M10.25 9.05a.97.97 0 0 1 0-1.36.96.96 0 0 1 1.36 0l3.15 3.2c.61.61.61 1.6 0 2.22l-3.15 3.2a.96.96 0 0 1-1.36 0 .97.97 0 0 1 0-1.36l2.9-2.95-2.9-2.95Z'
        fill='#006ADC'
      />
    </svg>
  );
};

const StyledExpandTrigger = styled('button', {
  width: 40,
  height: 40,
  position: 'absolute',
  left: 0,
  transform: 'translateX(calc(var(--sidebar-collapsed-width) - 20px))',
  top: '$space$3xl',
  zIndex: 2,
  border: 0,
  background: 'transparent',
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  '&::after': {
    ...tw`content block absolute inset-1 rounded-full`,
    background: 'white',
    border: '1px solid $blue11',
    [`.${darkTheme} &`]: {
      borderColor: '$blue11',
      background: '$blue1',
    },
  },
  svg: {
    ...tw`absolute`,
    width: 24,
    height: 24,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
  },
  [`.${darkTheme} &`]: {
    'svg path': {
      fill: '$blue11',
    },
  },
  variants: {
    active: {
      true: {
        transform: 'translateX(calc(var(--sidebar-expanded-width) - 20px))',
      },
    },
    menuOpen: {
      true: {
        svg: {
          transform: 'translate(-50%, -50%) rotate(180deg)',
        },
      },
    },
  },
});

export default function Dashboard() {
  globalPageStyles();

  const [sideBarExpanded, updateSideBarExpanded] = useState(false);
  const [sideBarHover, updateSideBarHover] = useState(false);
  const [triggerHover, updateTriggerHover] = useState(false);
  const wrapper = useRef<any>(null);
  const sideBar = useRef<any>(null);

  const expandHandler = () => updateSideBarExpanded(!sideBarExpanded);
  const hoverInHandler = () => updateSideBarHover(true);
  const hoverOutHandler = () => updateSideBarHover(false);

  return (
    <PageWrapper
      sideBarActive={sideBarExpanded}
      css={{
        overflow: 'hidden',
      }}
    >
      <PageHeader>
        <IconNavWrapper />
      </PageHeader>

      <StyledExpandTrigger
        active={sideBarExpanded || sideBarHover}
        menuOpen={sideBarExpanded}
        onMouseEnter={() => {
          updateTriggerHover(true);
        }}
        onMouseLeave={() => {
          updateTriggerHover(false);
        }}
        onClick={() => {
          // expandHandler();
          if (sideBarExpanded) {
            updateTriggerHover(false);
            updateSideBarHover(false);
            updateSideBarExpanded(false);
          } else {
            updateSideBarExpanded(true);
          }
        }}
      >
        <Icon_ExpandChevron />
      </StyledExpandTrigger>
      <StyledSideBar
        hovering={sideBarHover}
        ref={sideBar}
        onMouseEnter={() => hoverInHandler()}
        // onMouseLeave={() => hoverOutHandler()}
        expanded={sideBarExpanded}
      ></StyledSideBar>

      <div
        css={{
          display: 'flex',
          justifyContent: 'center',
          transition: 'padding-left 0.2s ease',
          paddingLeft: 'var(--sidebar-width)',
          width: '100vw',
          height: 'calc(100vh)',
        }}
      >
        {/* // content area container */}
        <div
          ref={wrapper}
          onMouseEnter={() => hoverOutHandler()}
          css={{
            // background: '$green10',
            overflowY: 'scroll',
            transition: 'width 0.2s ease',
            paddingTop: '$space$3xl',
          }}
        >
          <Container sidePadding='tight'>
            <div tw='mt-m'>
              <h1 tw='text-title1 text-indigo-12'>Dashboards</h1>
              <h3 tw='text-title3'>
                {' '}
                chevron hovering: {triggerHover.toString()}
              </h3>
              <div tw='text-hero text-blue-11'>Hello world</div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt eveniet reprehenderit doloribus fuga veniam, itaque
                molestiae illo fugiat voluptas nemo tenetur rerum eaque dicta at
                veritatis, minima voluptatum dolore impedit, voluptate ipsa
                maxime quo dignissimos. Dolore, repudiandae aliquid vero quae
                commodi reiciendis delectus ipsa. Soluta temporibus perspiciatis
                quo repellat. Quibusdam sit harum, pariatur libero at aliquam,
                deleniti est assumenda modi ut alias, aliquid esse delectus
                veritatis ducimus consectetur provident minima corrupti facilis
                velit. Dolorem earum doloribus, cumque laudantium iusto rerum,
                dolor, facere odit optio debitis tempora unde! Distinctio,
                officiis harum magnam blanditiis voluptatibus dolorum animi et
                adipisci. Sapiente autem incidunt aspernatur optio tempora sed
                minus amet commodi assumenda, unde aperiam. Recusandae qui omnis
                accusamus nam natus. Explicabo iure tempore cupiditate eveniet
                similique repudiandae et omnis repellendus, nulla assumenda ad
                animi fugiat reprehenderit facilis saepe perferendis aliquid
                odit incidunt placeat porro maxime vitae illo. Assumenda non
                consequuntur deserunt ipsam doloribus dicta alias. Provident
                exercitationem ipsum excepturi tempora nostrum. Nemo voluptas
                laudantium hic cupiditate facere, quo corrupti doloremque. Quos
                maiores veniam facilis repellat? Distinctio at ut obcaecati odio
                omnis! Placeat omnis, ea laboriosam soluta delectus, officiis
                possimus a tempore, excepturi vitae fugiat eum harum aspernatur
                assumenda dignissimos cumque inventore similique cupiditate.
                Nisi?
              </p>
            </div>
          </Container>
        </div>
      </div>
    </PageWrapper>
  );
}
