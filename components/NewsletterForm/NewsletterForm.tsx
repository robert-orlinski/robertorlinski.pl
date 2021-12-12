import { FC, useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import styled, { css } from 'styled-components';

import { SubmitButton } from './parts/inputs/SubmitButton';
import { EmailInput } from './parts/inputs/EmailInput';
import { NameInput } from './parts/inputs/NameInput';
import { Error } from './parts/ErrorAlert';

import subscribeToTheNewsletter from 'Helpers/requests/subscribeToTheNewsletter';

import { ErrorMessage, NewsletterData } from 'Types/newsletter';

type Props = {
  isInline?: boolean;
};

const NewsletterForm: FC<Props> = ({ isInline }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(false);

  const handleSignUp: SubmitHandler<NewsletterData> = async (data) => {
    const error = await subscribeToTheNewsletter(data);

    if (error) {
      setErrorMessage(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleSignUp)} {...{ isInline }}>
      <NameInput {...{ register, errors }} />
      <EmailInput {...{ register, errors }} />
      <SubmitButton />
      <Error {...{ errorMessage }} />
    </Form>
  );
};

const Form = styled.form<Props>`
  ${({ isInline }) =>
    isInline &&
    css`
      margin-top: -0.5rem;
    `};
`;

export default NewsletterForm;
