import { ChangeEvent, useState } from 'react';

interface State {
  [key: string]: any;
}

interface InputProp {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

type InputPropsObject<S> = { [key in keyof S]?: InputProp };

function useForm<S extends State>(initialValues: S): [S, InputPropsObject<S>] {
  const [values, setValues] = useState<S>(initialValues);

  const inputs: InputPropsObject<S> = {};

  (Object.keys(values) as Array<keyof InputPropsObject<S>>).forEach(key => {
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
