import React from 'react';
import { styled } from '@/styles/stitches.config';
import tw from 'twin.macro';
import { NavMenu } from './NavMenu';

const FcLogoMark = () => {
  return (
    <svg viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M31.967.033H0v8.632h31.967V.033ZM23.733 11.497H0v8.631h23.733v-8.631ZM15.393 22.964H0v8.632h15.393v-8.632Z'
        fill='#1C66DE'
      />
    </svg>
  );
};

const HeaderWrapper = styled('div', {
  ...tw`flex justify-between items-center`,
  background: '$white',
  boxShadow: '$2',
  minHeight: '$6',
  '@md': {
    height: '$9',
  },
});

/************ Logo **********/
const StyledLogo = styled('div', {
  ...tw`flex items-center justify-center`,
  width: '$9',
  alignSelf: 'stretch',
  background: '$primaryMidnight',
  '& > svg': {
    width: '$3',
    height: '$3',
  },
  '@md': {
    '& > svg': {
      width: '$4',
      height: '$4',
    },
  },
});

export const Header = () => {
  return (
    <HeaderWrapper>
      <StyledLogo>
        <FcLogoMark />
      </StyledLogo>
      <NavMenu />
    </HeaderWrapper>
  );
};
