import { FC } from 'react';
import { FieldValues } from 'react-hook-form';

import { TextInput } from 'Components/TextInput';

export const NameInput: FC<FieldValues> = ({ register, errors }) => (
  <TextInput
    label="Twoje imię (opcjonalne)"
    name="name"
    required={false}
    autocomplete="given-name"
    {...{ register, errors }}
  />
);
