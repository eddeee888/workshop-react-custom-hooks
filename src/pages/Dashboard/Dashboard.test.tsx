const ReactDOM = require('react-dom');
import React from 'react';
import { StaticRouter } from 'react-router';
import { UsersProvider } from 'src/common/components/UsersContext/UsersContext';
import { ViewerProvider } from 'src/common/components/ViewerContext/ViewerContext';
import Dashboard from './Dashboard';

const { act } = require('react-dom/test-utils');

describe('<Dashboard />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });
  it('should alert when mounted', () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const el = document.createElement('div');
    act(() => {
      ReactDOM.render(
        <StaticRouter context={{}}>
          <ViewerProvider>
            <UsersProvider>
              <Dashboard />
            </UsersProvider>
          </ViewerProvider>
        </StaticRouter>,
        el
      );
    });

    expect(alertSpy).toHaveBeenCalledTimes(1);
  });
});
