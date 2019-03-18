import React from 'react';
import Paper from 'src/common/components/Paper';
import Row from 'src/common/components/Row';
import useForm from 'src/common/hooks/useForm/useForm.answer-3';

interface Values {
  email: string;
  firstName: string;
  lastName: string;
  question1: string;
  question2: string;
  question3: string;
}

const Survey: React.FunctionComponent = () => {
  const [values, inputs] = useForm<Values>({
    email: '',
    firstName: '',
    lastName: '',
    question1: '',
    question2: '',
    question3: ''
  });

  return (
    <Paper>
      <h1>Survey</h1>
      <form>
        <Row>
          <div>
            <label>Email</label>
          </div>
          <div>
            <input {...inputs.email} />
          </div>
        </Row>

        <Row>
          <div>
            <label>First name</label>
          </div>
          <div>
            <input {...inputs.firstName} />
          </div>
        </Row>

        <Row>
          <div>
            <label>Last name</label>
          </div>
          <div>
            <input {...inputs.lastName} />
          </div>
        </Row>

        <hr />

        <Row>
          <div>
            <label>What do you think about react hooks?</label>
          </div>
          <div>
            <input {...inputs.question1} />
          </div>
        </Row>

        <Row>
          <div>
            <label>Are you going to use hooks in your projects?</label>
          </div>
          <div>
            <input {...inputs.question2} />
          </div>
        </Row>

        <Row>
          <div>
            <label>Would you recommend hooks to your friends?</label>
          </div>
          <div>
            <input {...inputs.question3} />
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
};

export default Survey;
