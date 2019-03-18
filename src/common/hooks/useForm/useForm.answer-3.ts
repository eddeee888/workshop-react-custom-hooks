import { ChangeEvent, useState } from 'react';

interface State {
  [key: string]: any;
}

interface InputProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

type Inputs<S> = { [key in keyof S]?: InputProps };

function useForm<S extends State>(initialValues: S): [S, Inputs<S>] {
  const [values, setValues] = useState<S>(initialValues);

  const inputs: Inputs<S> = {};

  (Object.keys(values) as Array<keyof Inputs<S>>).forEach(key => {
    inputs[key] = {
      name: key.toString(),
      value: values[key],
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setValues({ ...values, [key]: e.target.value })
    };
  });

  return [values, inputs];
}

export default useForm;
