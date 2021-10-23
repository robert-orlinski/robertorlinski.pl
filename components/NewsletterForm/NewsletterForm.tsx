import { FC, useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import styled from 'styled-components';
import router from 'next/router';

import { CenteredText } from 'Components/CenteredText';
import { SubmitButton } from './SubmitButton';
import { EmailInput } from './EmailInput';
import { NameInput } from './NameInput';
import { Error } from './Error';

import { subscribeToTheNewsletter } from 'Helpers/requests/subscribeToTheNewsletter';

import { ErrorMessage, NewsletterData } from 'Types/newsletter';

type Props = {
  centered?: boolean;
};

export const NewsletterForm: FC<Props> = ({ centered }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(false);

  const signUp: SubmitHandler<NewsletterData> = async (data) => {
    const response = await subscribeToTheNewsletter(data);
    const { error } = await response.json();

    if (!error) {
      router.push('/newsletter/potwierdzenie');
    } else {
      setErrorMessage(error);
    }
  };

  if (centered) {
    return (
      <Form onSubmit={handleSubmit(signUp)}>
        <Inputs>
          <NameInput {...{ register, errors }} />
          <EmailInput {...{ register, errors }} />
        </Inputs>
        <CenteredText as="footer">
          <SubmitButton />
        </CenteredText>
        <Error {...{ errorMessage }} />
      </Form>
    );
  }

  return (
    <Form onSubmit={handleSubmit(signUp)}>
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

const Inputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1.6rem;
`;
