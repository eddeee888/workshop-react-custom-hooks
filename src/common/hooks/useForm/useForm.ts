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

  // 1. Use Object.keys to return an array of State keys i.e. ['email', 'firstName', 'lastName', ...]

  // 2. Loop through created array and create input prop objects for `inputs`
  // `inputs` is going to look like this:
  // inputs = {
  //   email: {
  //     name: 'email',
  //     value: *value of email from `values`*,
  //     onChange: function to change value of email
  //   },
  //   firstName {
  //     name: 'firstName',
  //     value: *value of first name from `values`*,
  //     onChange: function to change value of first name
  //   },
  //   ...
  // }

  return [values, inputs];
}

export default useForm;
