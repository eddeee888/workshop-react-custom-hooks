import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import Paper from 'src/common/components/Paper';
import Row from 'src/common/components/Row';
import UsersContext from 'src/common/components/UsersContext';
import ViewerContext from 'src/common/components/ViewerContext';
import useForm from 'src/common/hooks/useForm/useForm.example-1';

interface State {
  email: string;
  password: string;
}

const Login: React.FunctionComponent = () => {
  const [{ email, password }, setValue] = useForm<State>({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const { viewer, setViewer } = useContext(ViewerContext);
  const { checkUserCredentials } = useContext(UsersContext);

  if (viewer) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Paper>
      <h1>Log in</h1>
      <form>
        <Row>
          <div>
            <label>Email</label>
          </div>
          <div>
            <input
              name="email"
              value={email}
              onChange={e => setValue({ email: e.target.value, password })}
            />
          </div>
        </Row>
        <Row>
          <div>
            <label>Password</label>
          </div>
          <div>
            <input
              name="password"
              type="password"
              value={password}
              onChange={e => setValue({ password: e.target.value, email })}
            />
          </div>
        </Row>
        {error && (
          <Row>
            <div className="error">{error}</div>
          </Row>
        )}
        <Row>
          <button
            type="button"
            onClick={() => {
              const valid = checkUserCredentials(email, password);

              if (valid) {
                setViewer({ email });
              } else {
                setError(
                  'The email/password combination you entered is incorrect.'
                );
              }
            }}
          >
            Log in
          </button>
        </Row>
      </form>
    </Paper>
  );
};
export default Login;
