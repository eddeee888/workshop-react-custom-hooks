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
  // @ts-ignore
  const [values, setValues] = useState<S>(initialValues);

  const inputs: InputPropsObject<S> = {};

  return [values, inputs];
}

export default useForm;
