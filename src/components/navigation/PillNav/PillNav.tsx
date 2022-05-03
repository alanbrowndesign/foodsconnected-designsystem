import { styled } from '@/styles/stitches.config';
import tw from 'twin.macro';
import { motion } from 'framer-motion';

// Icon imports
import Icon_BulletList from '@/tokens/icons/bullet-list.svg';
import Icon_CheckCircle from '@/tokens/icons/check.svg';
import Icon_Eye from '@/tokens/icons/eye.svg';
import Icon_Globe from '@/tokens/icons/globe.svg';
import Icon_Help from '@/tokens/icons/help.svg';
import Icon_List from '@/tokens/icons/list.svg';
import Icon_Sitemap from '@/tokens/icons/sitemap.svg';
import Icon_User from '@/tokens/icons/user.svg';
import Icon_Wrench from '@/tokens/icons/wrench.svg';

const StyledWrapper = styled('nav', {
  ...tw`flex gap-1 flex-wrap`,
});

const StyledPill = styled(motion.a, {
  ...tw`rounded-full flex gap-0.5 px-1 h-4 items-center`,
  background: '#E4EDFB',
  typeStyle: 'footnote',
  fontWeight: '$heavy',
  lineHeight: '$tight',
  color: '$midnight500',
  border: '1px solid #C8D5EB',
  flexWrap: 'nowrap',
  flexShrink: 0,
  transition: 'background-color 0.25s ease',
  textDecoration: 'none',

  '&:hover': {
    background: '#F2F7FF',
  },

  '& svg': {
    fill: '$accentCyan',
  },

  '& svg path': {
    fill: 'inherit',
  },
  variants: {
    active: {
      true: {
        background: '$primaryBrand',
        color: '$white',
        border: 0,
        '& svg': {
          fill: '$white',
        },
        '&:hover': {
          background: '$primaryBrand',
        },
      },
    },
  },
});

type PillProps = {
  children: React.ReactNode;
  icon: React.ReactNode;
  active?: boolean;
  onClick: any;
};

const Pill = ({ children, icon, active, onClick }: PillProps) => {
  return (
    <StyledPill
      href='#'
      active={active}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      {children}
    </StyledPill>
  );
};

type PillNavProps = {};

export const PillNav = () => {
  return (
    <StyledWrapper>
      <Pill icon={<Icon_BulletList />} onClick={() => {}} active>
        Supplier list
      </Pill>
      <Pill icon={<Icon_List />} onClick={() => {}}>
        Supplier attributes
      </Pill>
      <Pill icon={<Icon_CheckCircle />} onClick={() => {}}>
        Supplier approval
      </Pill>
      <Pill icon={<Icon_Help />} onClick={() => {}}>
        Compliance
      </Pill>
      <Pill icon={<Icon_User />} onClick={() => {}}>
        Contacts list
      </Pill>
      <Pill icon={<Icon_Sitemap />} onClick={() => {}}>
        Supply chain map
      </Pill>
      <Pill icon={<Icon_Globe />} onClick={() => {}}>
        Maps
      </Pill>
      <Pill icon={<Icon_Eye />} onClick={() => {}}>
        Activity overview
      </Pill>
      <Pill icon={<Icon_Wrench />} onClick={() => {}}>
        Admin
      </Pill>
    </StyledWrapper>
  );
};
