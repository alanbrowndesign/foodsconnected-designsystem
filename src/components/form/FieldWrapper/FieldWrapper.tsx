import { styled } from '@/styles/stitches.config';

const StyledFieldWrapper = styled('div', {
  spaceY: '$1',
});

const StyledLabel = styled('label', {
  display: 'block',
  typeStyle: 'body',
  fontWeight: '$heavy',
});

const Label = (props: LabelProps) => {
  const { children, htmlFor } = props;
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

type LabelProps = {
  children: React.ReactNode | string;
  htmlFor: string;
};

type FieldWrapperProps = {
  children: React.ReactNode;
  htmlFor: string;
  label: React.ReactNode | string;
};

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { children, htmlFor, label } = props;
  return (
    <StyledFieldWrapper>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </StyledFieldWrapper>
  );
};
