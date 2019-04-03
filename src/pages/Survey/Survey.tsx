import React, { useState } from 'react';
import Paper from 'src/common/components/Paper';
import Row from 'src/common/components/Row';

interface State {
  email: string;
  firstName: string;
  lastName: string;
  question1: string;
  question2: string;
  question3: string;
}

function Survey() {
  const [values, setValues] = useState<State>({
    email: '',
    firstName: '',
    lastName: '',
    question1: '',
    question2: '',
    question3: ''
  });

  const {
    email,
    firstName,
    lastName,
    question1,
    question2,
    question3
  } = values;

  return (
    <Paper>
      <h1>Survey</h1>
      <form>
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
            <label>First name</label>
          </div>
          <div>
            <input
              name="firstName"
              value={firstName}
              onChange={e =>
                setValues({ ...values, firstName: e.target.value })
              }
            />
          </div>
        </Row>

        <Row>
          <div>
            <label>Last name</label>
          </div>
          <div>
            <input
              name="lastName"
              value={lastName}
              onChange={e => setValues({ ...values, lastName: e.target.value })}
            />
          </div>
        </Row>

        <hr />

        <Row>
          <div>
            <label>What do you think about react hooks?</label>
          </div>
          <div>
            <input
              name="question1"
              value={question1}
              onChange={e =>
                setValues({ ...values, question1: e.target.value })
              }
            />
          </div>
        </Row>

        <Row>
          <div>
            <label>Are you going to use hooks in your projects?</label>
          </div>
          <div>
            <input
              name="question2"
              value={question2}
              onChange={e =>
                setValues({ ...values, question2: e.target.value })
              }
            />
          </div>
        </Row>

        <Row>
          <div>
            <label>Would you recommend hooks to your friends?</label>
          </div>
          <div>
            <input
              name="question3"
              value={question3}
              onChange={e =>
                setValues({ ...values, question3: e.target.value })
              }
            />
          </div>
        </Row>

        <Row>
          <button
            type="button"
            onClick={() => {
              alert(JSON.stringify(values));
            }}
          >
            Submit
          </button>
        </Row>
      </form>
    </Paper>
  );
}

export default Survey;
