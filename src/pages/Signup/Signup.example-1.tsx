import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import Paper from 'src/common/components/Paper';
import Row from 'src/common/components/Row';
import UsersContext from 'src/common/components/UsersContext/UsersContext';
import ViewerContext from 'src/common/components/ViewerContext/ViewerContext';

interface State {
  email: string;
  password: string;
}

const Signup: React.FunctionComponent = () => {
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

  const { addUser } = useContext(UsersContext);
  const { viewer, setViewer } = useContext(ViewerContext);

  if (viewer) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Paper>
      <form>
        <h1>Sign up</h1>
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
        <Row>
          <button
            type="button"
            onClick={() => {
              addUser({ email: values.email, password: values.password });
              setViewer({ email: values.password });
            }}
          >
            Sign up
          </button>
        </Row>
      </form>
    </Paper>
  );
};

export default Signup;
