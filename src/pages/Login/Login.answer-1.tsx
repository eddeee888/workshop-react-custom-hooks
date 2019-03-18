import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import Paper from 'src/common/components/Paper';
import Row from 'src/common/components/Row';
import UsersContext from 'src/common/components/UsersContext';
import ViewerContext from 'src/common/components/ViewerContext';

interface State {
  email: string;
  password: string;
}

const Login: React.FunctionComponent = () => {
  const [values, setValues] = useState<State>({
    email: '',
    password: ''
  });

  function setEmail(email: string): void {
    setValues({ email, ...values });
  }

  function setPassword(password: string): void {
    setValues({ password, ...values });
  }

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
              value={values.email}
              onChange={e => setEmail(e.target.value)}
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
              value={values.password}
              onChange={e => setPassword(e.target.value)}
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
              const valid = checkUserCredentials(values.email, values.password);

              if (valid) {
                setViewer({ email: values.email });
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
