import { forwardRef, Ref } from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

import { TextInput } from 'Components/TextInput';

export const SearchForm = forwardRef((props, ref: Ref<HTMLInputElement>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const handleSearch: SubmitHandler<{ query: string }> = async (data) => {
    console.log(data);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(handleSearch)}>
        <TextInput
          label="Szukaj"
          name="query"
          required={false}
          autocomplete="off"
          {...{ register, errors, ref }}
        />
      </Form>
      <Results />
    </>
  );
});

const Form = styled.form`
  width: min(100%, 570px);
  margin: 0 auto;
`;

const Results = styled.section``;
