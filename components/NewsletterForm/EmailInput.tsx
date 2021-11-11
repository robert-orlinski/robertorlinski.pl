import { FC } from 'react';
import { FieldValues } from 'react-hook-form';

import TextInput from 'Components/TextInput';

import { EMAIL_PATTERN } from 'Helpers/constants';

export const EmailInput: FC<FieldValues> = ({ register, errors }) => (
  <TextInput
    label="Twój e-mail"
    name="email"
    required={true}
    pattern={EMAIL_PATTERN}
    autoComplete="email"
    {...{ register, errors }}
  />
);
