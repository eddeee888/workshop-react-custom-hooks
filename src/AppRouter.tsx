import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from 'src/common/components/Footer';
import Main from 'src/common/components/Main';
import Nav from 'src/common/components/Nav';
import Paper from 'src/common/components/Paper';
import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import Logout from 'src/pages/Logout';
import Signup from 'src/pages/Signup';
import Survey from 'src/pages/Survey';

const AppRouter = () => (
  <BrowserRouter>
    <Route path="/">
      <>
        <Nav />
        <Main>
          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <Paper>
                  <h1>React custom hooks workshop</h1>
                  <div>
                    This is a workshop for{' '}
                    <a
                      target="_blank"
                      href="https://reactjs.org/docs/hooks-custom.html"
                    >
                      React custom hooks
                    </a>
                    . In this workshop, we are going to be exploring the
                    following concepts:
                  </div>
                  <ul>
                    <li>
                      Hook's setState vs traditional setState + create wrapper
                      functions (exercise 1).
                    </li>
                    <li>Create custom hooks to re-use logic (exercise 2).</li>
                    <li>
                      Create a custom hook to handle form inputs state: useForm
                      (exercise 3).
                    </li>
                  </ul>
                  <div>
                    Exercises can be found in:{' '}
                    <a
                      target="_blank"
                      href="https://github.com/eddeee888/workshop-react-custom-hooks/blob/master/exercise.md"
                    >
                      exercise.md
                    </a>
                  </div>
                  <div>
                    Answers can be found in <b>*.answer-*.tsx</b> files.
                  </div>
                  <hr />
                  <div>More references and resources:</div>
                  <ul>
                    <li>
                      <a
                        target="_blank"
                        href="https://reactjs.org/docs/hooks-custom.html"
                      >
                        Building your own hooks
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://usehooks.com/">
                        More hook examples
                      </a>
                    </li>
                  </ul>
                </Paper>
              )}
            />
            <Route path="/survey" component={Survey} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </Main>
        <Footer />
      </>
    </Route>
  </BrowserRouter>
);

export default AppRouter;
