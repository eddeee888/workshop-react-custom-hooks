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
  const [values, setValues] = useState<State>({ email: '', password: '' });
  const { email, password } = values;

  const inputProps: InputProps = {
    email: {
      name: 'email',
      value: email,
      onChange: e => {
        setValues({ ...values, email: e.target.value });
      }
    },
    password: {
      name: 'password',
      value: password,
      onChange: e => setValues({ ...values, password: e.target.value })
    }
  };

  return [values, inputProps];
}

export default useAuthenticationForm;
