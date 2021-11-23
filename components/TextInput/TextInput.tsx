import { FC, forwardRef, Ref, InputHTMLAttributes } from 'react';
import { DeepMap, FieldError, FieldValues, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

import ErrorIcon from './ErrorIcon';

type Props = {
  label: string;
  name: string;
  required: boolean;
  pattern?: RegExp;
  register?: UseFormRegister<FieldValues>;
  errors?: DeepMap<FieldValues, FieldError>;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'pattern'>;

const TextInput: FC<Props> = forwardRef(
  ({ label, name, required, pattern, register, errors, ...props }, ref: Ref<HTMLInputElement>) => {
    const isValidableInput = register && errors;

    if (isValidableInput) {
      const isErrorThrown = errors[name] ? true : false;

      return (
        <Container>
          <Field
            id={name}
            aria-invalid={isErrorThrown}
            placeholder={label}
            {...{ isErrorThrown, ...props }}
            {...register(name, { required, pattern })}
          />
          <Label htmlFor={name}>{label}</Label>
          {isErrorThrown && <ErrorIcon />}
        </Container>
      );
    }

    return (
      <Container>
        <Field id={name} data-testid={name} placeholder={label} {...{ ref, ...props }} />
        <Label htmlFor={name}>{label}</Label>
      </Container>
    );
  },
);

const Container = styled.p`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

const Field = styled.input<{ isErrorThrown?: boolean }>`
  width: 100%;
  height: var(--input-height);

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

export default TextInput;
