import { FC } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import styled from 'styled-components';

import { Button } from 'Components/Button';
import { Input } from 'Components/Input';
import { ButtonContainer } from 'Components/ButtonContainer';

type Props = {
  centered?: boolean;
};

export const NewsletterForm: FC<Props> = ({ centered }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const signUp: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  if (centered) {
    return (
      <form onSubmit={handleSubmit(signUp)}>
        <Inputs>
          <Input label="Twoje imię" name="NAME" {...{ register, errors }} />
          <Input label="Twój e-mail" name="EMAIL" {...{ register, errors }} />
        </Inputs>
        <ButtonContainer>
          <Button type="submit">Zapisuję się</Button>
        </ButtonContainer>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit(signUp)}>
      <Input label="Twoje imię" name="NAME" {...{ register, errors }} />
      <Input label="Twój e-mail" name="EMAIL" {...{ register, errors }} />
      <Button type="submit">Zapisuję się</Button>
    </form>
  );
};

const Inputs = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1.6rem;
`;
