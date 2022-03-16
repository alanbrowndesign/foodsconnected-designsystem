import { styled } from '@/styles/stitches.config';
import tw, { theme } from 'twin.macro';
import { motion } from 'framer-motion';

const StyledButton = styled(motion.button, {
  // base styles with Tailwind:
  ...tw`rounded-md px-2 py-1 text-neutral-100 relative`,
  typeStyle: 'body',
  fontFamily: 'display',
  fontWeight: '$heavy',
  color: '$white',

  '.button-inner': {
    ...tw`relative z-10`,
  },

  // other custom shit:
  '&::after': {
    content: '',
    ...tw`block absolute inset-0 z-0 rounded-md`,
  },

  variants: {
    type: {
      primary: {
        '&::after': {
          ...tw`bg-primary-brand`,
        },
      },
      secondary: {
        ...tw`text-primary-brand`,
        '&::after': {
          ...tw`bg-transparent border-2 border-primary-brand`,
        },
        background: 'transparent',
      },
    },
  },
});

type ButtonProps = {
  type?: any;
  children: React.ReactNode;
};

export const Button = (props: ButtonProps) => {
  const { type, children } = props;
  return (
    <StyledButton
      type={type}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.975,
      }}
    >
      <div className='button-inner'>{children}</div>
    </StyledButton>
  );
};

Button.defaultProps = {
  children: 'I am a button!',
  type: 'primary',
};
