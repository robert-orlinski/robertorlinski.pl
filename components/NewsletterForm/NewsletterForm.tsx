import { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import styled from 'styled-components';
import router from 'next/router';

import { SubmitButton } from './SubmitButton';
import { EmailInput } from './EmailInput';
import { NameInput } from './NameInput';
import { Error } from './Error';

import { subscribeToTheNewsletter } from 'Helpers/requests/subscribeToTheNewsletter';

import { ErrorMessage, NewsletterData } from 'Types/newsletter';

export const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(false);

  const handleSignUp: SubmitHandler<NewsletterData> = async (data) => {
    const response = await subscribeToTheNewsletter(data);
    const { error } = await response.json();

    if (!error) {
      router.push('/newsletter/potwierdzenie');
    } else {
      setErrorMessage(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleSignUp)}>
      <NameInput {...{ register, errors }} />
      <EmailInput {...{ register, errors }} />
      <SubmitButton />
      <Error {...{ errorMessage }} />
    </Form>
  );
};

const Form = styled.form`
  margin-top: -0.7rem;
`;
