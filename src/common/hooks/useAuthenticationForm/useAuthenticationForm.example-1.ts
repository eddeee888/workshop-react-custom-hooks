import { Dispatch, SetStateAction, useState } from 'react';

interface State {
  email: string;
  password: string;
}

function useAuthenticationForm(): [State, Dispatch<SetStateAction<State>>] {
  const [values, setValues] = useState<State>({ email: '', password: '' });

  return [values, setValues];
}

export default useAuthenticationForm;
