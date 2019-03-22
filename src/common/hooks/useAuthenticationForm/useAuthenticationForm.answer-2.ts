import { useState } from 'react';

interface State {
  email: string;
  password: string;
}

interface ReturnValue {
  emailObj: {
    value: State['email'];
    handleChange: (email: string) => void;
  };
  passwordObj: {
    value: State['password'];
    handleChange: (password: string) => void;
  };
}

function useAuthenticationForm(): ReturnValue {
  const [values, setValues] = useState<State>({ email: '', password: '' });

  function setEmail(email: string): void {
    setValues({ email, ...values });
  }

  function setPassword(password: string): void {
    setValues({ password, ...values });
  }

  return {
    emailObj: {
      value: values.email,
      handleChange: setEmail
    },
    passwordObj: {
      value: values.password,
      handleChange: setPassword
    }
  };
}

export default useAuthenticationForm;
