import { styled } from '@/styles/stitches.config';
import { getSpaces } from 'connected-ui-edge';

const StyledWrapper = styled('div', {
  background: '#FCFDFF',
  neutral300Border: '1px solid #DAE1E8',
  boxShadow: '1px 2px 12px rgba(10,40,86,0.12)',
  borderRadius: 8,
  padding: 24,
  variants: {
    padding: {
      loose: {
        padding: '$4',
      },
      medium: {
        padding: '$3',
      },
      tight: {
        padding: '$2',
      },
    },
    spaceY: {
      ...getSpaces(),
    },
  },
});

type TileProps = {
  children: React.ReactNode;
  padding?: 'loose' | 'medium' | 'tight';
  spaceY?: string | number;
};

export const Tile = ({ children, padding, spaceY }: TileProps) => {
  return (
    <StyledWrapper padding={padding} spaceY={spaceY}>
      {children}
    </StyledWrapper>
  );
};
