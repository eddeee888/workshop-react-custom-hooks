import { Dispatch, SetStateAction, useState } from 'react';

interface State {
  email: string;
  password: string;
}

function useForm(
  initialValues: State
): [State, Dispatch<SetStateAction<State>>] {
  const [values, setValues] = useState<State>(initialValues);

  return [values, setValues];
}

export default useForm;
