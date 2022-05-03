import { styled, darkTheme } from '@/styles/stitches.config';
import tw from 'twin.macro';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

type MainNavProps = {
  themeToggle: any;
};

const StyledToggler = styled('button', {
  background: '$red5',
});

export const MainNav = (props: MainNavProps) => {
  const { themeToggle } = props;
  return (
    <div>
      <StyledToggler onClick={themeToggle}>Toggle Theme</StyledToggler>
    </div>
  );
};
