import tw, { styled } from 'twin.macro';

const StyledButton = styled('button', {
  // base styles with Tailwind:
  ...tw`rounded-md p-4 font-bold text-white text-7`,

  // other custom shit:
  '&::after': {
    content: '',
  },

  variants: {
    small: {
      fontSize: 11,
    },
    type: {
      primary: {
        background: tw`bg-blue-500`,
      },
      secondary: {
        background: 'transparent',
        border: tw`border-b-blue-500`,
      },
    },
  },
});

const StyledInput = styled.input({
  background: 'red',
});

export const Button = (props: any) => {
  const { label } = props;
  return (
    <>
      <StyledInput />
      {/* <button tw='rounded-md bg-red-500 p-4 font-bold text-white'>
        {label}
      </button> */}
      <StyledButton>{label}</StyledButton>
    </>
  );
};

Button.defaultProps = {
  label: 'I am a button!',
};
