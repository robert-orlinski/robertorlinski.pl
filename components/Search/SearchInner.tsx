import { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import { useForm, FieldValues } from 'react-hook-form';

import { TextInput } from 'Components/TextInput';

type Props = {};

export const SearchInner: FC<Props> = ({}) => {
  const {
    register,
    formState: { errors },
  } = useForm<FieldValues>();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <>
      <Form method="GET">
        <TextInput
          label="Szukaj"
          name="query"
          required={false}
          autoComplete="off"
          onChange={handleSearch}
          {...{ register, errors }}
        />
      </Form>
      <section aria-live="polite" aria-atomic="true" id="search-results"></section>
    </>
  );
};

const Form = styled.form`
  width: min(100%, 570px);
  margin: 0 auto;
`;
