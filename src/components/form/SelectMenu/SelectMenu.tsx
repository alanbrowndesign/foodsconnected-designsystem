import { styled } from '@/styles/stitches.config';
import * as Select from '@radix-ui/react-select';

import { FieldWrapper } from '@/components';

type SelectMenuProps = {
  label: React.ReactNode | string;
  children: React.ReactNode;
  id: any;
};

const StyledSelect = styled('select', {
  height: '$5',
  border: '1px solid $neutral400',
  borderRadius: '$xs',
  width: '100%',
  padding: '$05',
  typeStyle: 'body',
});

export const SelectMenu = (props: SelectMenuProps) => {
  const { label, children, id } = props;
  return (
    <FieldWrapper htmlFor={id} label={label}>
      <StyledSelect name={id} id={id}>
        {children}
      </StyledSelect>
    </FieldWrapper>
  );
};

SelectMenu.defaultProps = {
  label: 'Field label',
  id: 'cars',
  children: (
    <>
      <option value='volvo'>Volvo</option>
      <option value='saab'>Saab</option>
      <option value='mercedes'>Mercedes</option>
      <option value='audi'>Audi</option>
    </>
  ),
};
