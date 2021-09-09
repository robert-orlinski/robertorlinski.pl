import { FC } from 'react';
import styled from 'styled-components';
import { DeepMap, FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

type Props = {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: DeepMap<FieldValues, FieldError>;
} & FieldProps;

export const Input: FC<Props> = ({ label, name, register, errors }) => (
  <Container>
    <Field
      {...register(name, { required: true })}
      id={name}
      aria-invalid={errors[name] ? 'true' : 'false'}
      placeholder={label}
    />
    <Label htmlFor={name}>{label}</Label>
  </Container>
);

const Container = styled.p`
  position: relative;
  margin-bottom: 0.8rem;
`;

const Field = styled.input`
  height: 2.5rem;

  border: 0;
  border-bottom: 1px solid #000;

  &::placeholder {
    opacity: 0;
  }

  &:focus {
    border-bottom-width: 2px;
  }
`;

const Label = styled.label`
  position: absolute;

  left: 0;
  top: 50%;

  pointer-events: none;
  white-space: pre;

  transform: translateY(-50%);
  transition: opacity 300ms;

  ${Field}:focus + &,
  ${Field}:not(:placeholder-shown) + & {
    opacity: 0;
  }
`;
