import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import Paper from 'src/common/components/Paper';
import Row from 'src/common/components/Row';
import UsersContext from 'src/common/components/UsersContext/UsersContext';
import ViewerContext from 'src/common/components/ViewerContext/ViewerContext';
import useForm from 'src/common/hooks/useForm/useForm.example-1';

interface State {
  email: string;
  password: string;
}

const Signup: React.FunctionComponent = () => {
  const [{ email, password }, setValues] = useForm<State>({
    email: '',
    password: ''
  });

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
              onChange={e => setValues({ email: e.target.value, password })}
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
              onChange={e => setValues({ password: e.target.value, email })}
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
