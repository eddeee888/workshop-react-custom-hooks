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

  function setEmail(email: string): void {
    setValues({ email, ...values });
  }

  function setPassword(password: string): void {
    setValues({ password, ...values });
  }

  return [values, { setEmail, setPassword }];
}

export default useAuthenticationForm;
