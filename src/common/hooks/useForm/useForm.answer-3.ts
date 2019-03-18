import { ChangeEvent, useState } from 'react';

interface InputProps {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface Result {
  [key: string]: InputProps;
}

function useForm<S>(initialValues: S): Result {
  const [values, setValues] = useState<S>(initialValues);

  const result: Result = {};

  Object.keys(values).forEach(key => {
    result[key] = {
      name: key,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setValues({ ...values, [key]: e.target.value })
    };
  });

  return result;
}

export default useForm;
