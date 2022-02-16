import tw, { styled } from 'twin.macro';

const StyledButton = styled('button', {
  ...tw`rounded-md bg-red-500 p-4 font-bold text-white`,
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
