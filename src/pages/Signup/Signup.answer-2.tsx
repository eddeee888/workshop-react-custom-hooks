import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import Paper from 'src/common/components/Paper';
import Row from 'src/common/components/Row';
import UsersContext from 'src/common/components/UsersContext/UsersContext';
import ViewerContext from 'src/common/components/ViewerContext/ViewerContext';
import useAuthenticationForm from 'src/common/hooks/useAuthenticationForm/useAuthenticationForm.answer-2';

const Signup: React.FunctionComponent = () => {
  const { emailObj, passwordObj } = useAuthenticationForm();

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
              value={emailObj.value}
              onChange={e => emailObj.handleChange(e.target.value)}
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
              value={passwordObj.value}
              onChange={e => passwordObj.handleChange(e.target.value)}
            />
          </div>
        </Row>
        <Row>
          <button
            type="button"
            onClick={() => {
              addUser({ email: emailObj.value, password: passwordObj.value });
              setViewer({ email: emailObj.value });
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
