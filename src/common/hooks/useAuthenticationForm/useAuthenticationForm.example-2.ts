import { useState } from 'react';

interface State {
  email: string;
  password: string;
}

interface StateFn {
  setEmail: (email: string) => void;
  setPassword: (email: string) => void;
}

function useAuthenticationForm(): [State, StateFn] {
  const [values, setValues] = useState<State>({ email: '', password: '' });
  return [
    values,
    {
      setEmail: (email: string) => setValues({ email, ...values }),
      setPassword: (password: string) => setValues({ password, ...values })
    }
  ];
}

export default useAuthenticationForm;
