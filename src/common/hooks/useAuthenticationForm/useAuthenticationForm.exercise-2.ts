import { useState } from 'react';

interface State {
  email: string;
  password: string;
}
interface InputProps {
  email: {
    name: 'email';
    value: State['email'];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
  password: {
    name: 'password';
    value: State['password'];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

function useAuthenticationForm(): [State, InputProps] {
  // @ts-ignore
  const [values, setValues] = useState<State>({ email: '', password: '' });

  // @ts-ignore
  const inputProps: InputProps = {};

  return [values, inputProps];
}

export default useAuthenticationForm;
