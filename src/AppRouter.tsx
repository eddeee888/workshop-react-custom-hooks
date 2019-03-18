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
                      hook's setState vs traditional setState (exercise 1)
                    </li>
                    <li>
                      re-using logic and return values using custom hooks
                      (exercise 2)
                    </li>
                    <li>create custom form hook: useForm (exercise 3)</li>
                  </ul>
                  <div>
                    Exercises can be found in:
                    <ul>
                      <li>
                        <b>Signup.tsx</b>: Exercise 1 and 2
                      </li>
                      <li>
                        <b>Dashboard.tsx</b>: Exercise 3
                      </li>
                    </ul>
                  </div>
                  <div>
                    Answers can be found in <b>*.answer-*.tsx</b> files.
                  </div>
                  <hr />
                  <div>Sample tests and notes can be found in:</div>
                  <ul>
                    <li>
                      <b>Signup.example-2.test.tsx</b>
                    </li>
                    <li>
                      <b>Dashboard.example-3.test.tsx</b>
                    </li>
                  </ul>
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
