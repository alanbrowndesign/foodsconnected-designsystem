import { PageWrapper } from '@/components';
import { Text, Button } from 'connected-ui-edge';
import tw from 'twin.macro';
import { useState } from 'react';
import { styled, globalCss, darkTheme } from '@/styles/stitches.config';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';

// @refresh reset

const globalPageStyles = globalCss({
  body: {
    background: '$slate3',
  },
});

const StyledText = styled('div', {
  color: '$red10',
  typeStyle: 'subhead',
  [`.${darkTheme} &`]: {
    color: '$green10',
  },
  '@sm': {
    typeStyle: 'headline',
  },
  '@md': {
    typeStyle: 'hero',
  },
});

const StyledThemeToggle = styled('button', {});

const StyledWrapper = styled('div', {});

const TextTest = (props: any) => {
  const {} = props;
  return (
    <>
      <StyledText>I am styled text!</StyledText>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

const StyledBox2 = styled('div', {
  ...tw`text-hero m-2xl text-accent-orange border-2`,
  typeStyle: 'hero',
  border: 10,
});

const textString = 'The quick brown fox';

export default function DesignTokens() {
  globalPageStyles();

  // Theming
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
    // setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }, []);

  if (!mounted) return null;

  return (
    <PageWrapper>
      <StyledWrapper>
        <StyledThemeToggle
          onClick={() => {
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
          }}
        >
          Toggle theme
        </StyledThemeToggle>

        <TextTest />
        <main>
          <Text typeStyle='headline' tag='h2' color='blue11'>
            I am a component
          </Text>
          <Button onClick={() => {}} type='secondary'>
            I am a button
          </Button>
          {/* hero */}

          <br />
          <br />
          <br />
          <br />
          <br />

          <StyledBox2>I am hero text</StyledBox2>

          <br />
          <br />
          <br />
          <br />
          <br />
          <Text typeStyle='hero' tag='h1' color='slate12'>
            {textString}
          </Text>

          {/* headline */}
          <Text typeStyle='headline' tag='h2' color='slate12'>
            {textString}
          </Text>

          {/* title1 */}
          <Text typeStyle='title1' tag='h2' color='slate12'>
            {textString}
          </Text>

          {/* title2 */}
          <Text typeStyle='title2' tag='h2' color='slate12'>
            {textString}
          </Text>

          {/* title3 */}
          <Text typeStyle='title3' tag='h2' color='slate12'>
            {textString}
          </Text>

          {/* heading */}
          <Text typeStyle='heading' tag='h2' color='slate12'>
            {textString}
          </Text>

          {/* subhead */}
          <Text typeStyle='subhead' tag='h2' color='slate12'>
            {textString}
          </Text>

          {/* body */}
          <Text typeStyle='body' tag='h2' color='slate12'>
            {textString}
          </Text>

          {/* footnote */}
          <Text typeStyle='footnote' tag='h2' color='slate12'>
            {textString}
          </Text>

          {/* caption */}
          <Text typeStyle='caption' tag='h2' color='slate12'>
            {textString}
          </Text>

          {/* micro */}
          <Text typeStyle='micro' tag='h2' color='slate12'>
            {textString}
          </Text>
        </main>
      </StyledWrapper>
    </PageWrapper>
  );
}
