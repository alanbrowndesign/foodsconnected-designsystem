import { styled, darkTheme } from '@/styles/stitches.config';
import tw from 'twin.macro';
import {
  Icon_Cog,
  Icon_Bell,
  Icon_Help,
  Icon_List,
  Icon_Moon,
  Icon_Sun,
} from './Icons';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

const StyledIconButton = styled('a', {
  border: 0,
  padding: 0,
  width: '$space$5',
  height: '$space$5',
  display: 'grid',
  placeItems: 'center',
  cursor: 'pointer',

  svg: {
    width: '$space$xs',
    height: '$space$xs',
    path: {
      fill: '$blue10',
    },
  },

  '&:hover': {
    path: {
      fill: '$blue11',
    },
  },
});

const StyledThemeToggle = styled(StyledIconButton, {});

const StyledIconNav = styled('div', {
  display: 'flex',
  gap: '$5xs-4xs',
});

export const IconNav = (props: any) => {
  const { onThemeToggle } = props;
  const { theme, setTheme } = useTheme();
  return (
    <StyledIconNav>
      <StyledIconButton>
        <Icon_List />
      </StyledIconButton>
      <StyledIconButton>
        <Icon_Help />
      </StyledIconButton>
      <StyledIconButton>
        <Icon_Cog />
      </StyledIconButton>
      <StyledIconButton
        css={{
          position: 'relative',
          '&::after': {
            ...tw`flex items-center justify-center content absolute right-0 top-0 rounded-full font-heavy`,
            width: 16,
            height: 16,
            background: '$red9',
            content: '2',
            color: '#fff',
            fontSize: '11px',
            paddingBottom: 2,
          },
        }}
      >
        <Icon_Bell />
      </StyledIconButton>
      <StyledThemeToggle as='h1' onClick={onThemeToggle}>
        {theme !== 'dark' ? <Icon_Moon /> : <Icon_Sun />}
      </StyledThemeToggle>
    </StyledIconNav>
  );
};
