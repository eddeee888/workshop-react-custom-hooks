import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import Paper from 'src/common/components/Paper';
import Row from 'src/common/components/Row';
import UsersContext from 'src/common/components/UsersContext/UsersContext';
import ViewerContext from 'src/common/components/ViewerContext/ViewerContext';
import useAuthenticationForm from 'src/common/hooks/useAuthenticationForm/useAuthenticationForm.answer-2';

function Signup() {
  const [values, inputProps] = useAuthenticationForm();

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
              name={inputProps.email.name}
              value={inputProps.email.value}
              onChange={inputProps.email.onChange}
            />
          </div>
        </Row>
        <Row>
          <div>
            <label>Password</label>
          </div>
          <div>
            <input
              type="password"
              name={inputProps.password.name}
              value={inputProps.password.value}
              onChange={inputProps.password.onChange}
            />
          </div>
        </Row>
        <Row>
          <button
            type="button"
            onClick={() => {
              addUser(values);
              setViewer({ email: values.email });
            }}
          >
            Sign up
          </button>
        </Row>
      </form>
    </Paper>
  );
}

export default Signup;
