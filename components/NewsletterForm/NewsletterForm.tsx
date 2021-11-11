import { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import styled from 'styled-components';

import { SubmitButton } from './SubmitButton';
import { EmailInput } from './EmailInput';
import { NameInput } from './NameInput';
import { Error } from './Error';

import subscribeToTheNewsletter from 'Helpers/requests/subscribeToTheNewsletter';

import { ErrorMessage, NewsletterData } from 'Types/newsletter';

const NewsletterForm = () => {
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

export default NewsletterForm;
