import { FC } from 'react';
import { FieldValues } from 'react-hook-form';

import { TextInput } from 'Components/TextInput';

import { DATE_PATTERN } from 'Helpers/constants';

export const EmailInput: FC<FieldValues> = ({ register, errors }) => (
  <TextInput
    label="Twój e-mail"
    name="email"
    required={true}
    pattern={DATE_PATTERN}
    autocomplete="email"
    {...{ register, errors }}
  />
);
