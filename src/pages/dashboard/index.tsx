import { PageWrapper } from '@/components';
import { Text, Button, Container } from 'connected-ui-edge';
import tw from 'twin.macro';
import { styled, globalCss, darkTheme } from '@/styles/stitches.config';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { blue } from '@radix-ui/colors';
import { SearchBar, PageHeader, IconNav } from '@/local-components';

// @refresh reset

const transitionTime = 300;

const globalPageStyles = globalCss({
  '.toggling-theme': {
    '*, *::before, *::after': {
      transition: `
        color-scheme ${transitionTime}ms linear,
        color ${transitionTime}ms linear,
        background-color ${transitionTime}ms linear, fill ${transitionTime}ms linear !important`,
    },
  },
  body: {
    background: '$slate3',
    [`.${darkTheme} &`]: {
      background: '$indigo1',
    },
  },
});

const StyledThemeToggle = styled('button', {});

export default function Dashboard() {
  globalPageStyles();

  // Theming
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [menuActive, updateMenuActive] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Burger Menu active

  return (
    <PageWrapper>
      <PageHeader
        burgerActive={menuActive}
        onBurgerClick={() => {
          updateMenuActive(!menuActive);
        }}
      >
        <IconNav
          onThemeToggle={() => {
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
            document.querySelector('html')?.classList.add('toggling-theme');
            setTimeout(() => {
              document
                .querySelector('html')
                ?.classList.remove('toggling-theme');
            }, transitionTime);
          }}
        />
      </PageHeader>
      <Container sidePadding='tight'>
        <div tw='mt-m'>
          <h1 tw='text-title1 text-indigo-12'>Dashboards</h1>
        </div>
      </Container>
    </PageWrapper>
  );
}
