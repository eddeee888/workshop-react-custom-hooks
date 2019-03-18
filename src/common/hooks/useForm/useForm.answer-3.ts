import { ChangeEvent, useState } from 'react';

interface Props {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

type Inputs<S> = { [key in keyof S]: Props };

function useForm<S>(initialValues: S): [S, Inputs<S>] {
  const [values, setValues] = useState<S>(initialValues);

  // @ts-ignore
  const inputs: Inputs<S> = {};

  (Object.keys(values) as Array<keyof Inputs<S>>).forEach(key => {
    // @ts-ignore
    inputs[key] = {
      name: key,
      value: values[key],
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setValues({ ...values, [key]: e.target.value })
    };
  });

  return [values, inputs];
}

export default useForm;
