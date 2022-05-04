import { styled, darkTheme } from '@/styles/stitches.config';

const StyledSearch = styled('input', {
  background: 'red',
});

export const SearchBar = () => {
  return <StyledSearch type='search' />;
};
