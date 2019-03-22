import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import Paper from 'src/common/components/Paper';
import Row from 'src/common/components/Row';
import UsersContext from 'src/common/components/UsersContext/UsersContext';
import ViewerContext from 'src/common/components/ViewerContext/ViewerContext';
import useAuthenticationForm from 'src/common/hooks/useAuthenticationForm/useAuthenticationForm.example-1';

const Signup: React.FunctionComponent = () => {
  const [values, setValues] = useAuthenticationForm();
  const { email, password } = values;

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
              value={email}
              onChange={e => setValues({ ...values, email: e.target.value })}
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
              onChange={e => setValues({ ...values, password: e.target.value })}
            />
          </div>
        </Row>
        <Row>
          <button
            type="button"
            onClick={() => {
              addUser({ email, password });
              setViewer({ email });
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
