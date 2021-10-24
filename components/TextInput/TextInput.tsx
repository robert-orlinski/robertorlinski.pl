import { FC, forwardRef, Ref } from 'react';
import styled from 'styled-components';
import { DeepMap, FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

import { ErrorIcon } from './ErrorIcon';

type Props = {
  label: string;
  name: string;
  autocomplete: string;
  required: boolean;
  pattern?: RegExp;
  register: UseFormRegister<FieldValues>;
  errors: DeepMap<FieldValues, FieldError>;
};

export const TextInput: FC<Props> = forwardRef(
  ({ label, name, required, pattern, register, errors }, ref: Ref<HTMLInputElement>) => {
    const isErrorThrown = errors[name] ? true : false;

    return (
      <Container>
        <Field
          {...register(name, { required, pattern })}
          id={name}
          aria-invalid={isErrorThrown}
          placeholder={label}
          type="text"
          {...{ isErrorThrown, ref }}
        />
        <Label htmlFor={name}>{label}</Label>
        {isErrorThrown && <ErrorIcon />}
      </Container>
    );
  },
);

const Container = styled.p`
  position: relative;
  margin-bottom: 0.8rem;
`;

const Field = styled.input<{ isErrorThrown: boolean }>`
  width: 100%;
  height: 2.5rem;

  border: 0;
  border-bottom: 1px solid ${({ isErrorThrown }) => (isErrorThrown ? 'var(--error-red)' : '#000')};

  transition: border-color var(--short-transition-duration);

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
  transition: opacity var(--short-transition-duration);

  ${Field}:focus + &,
  ${Field}:not(:placeholder-shown) + & {
    opacity: 0;
  }
`;
