import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import ViewerContext from 'src/common/components/ViewerContext/ViewerContext';

function Logout() {
  const { viewer, clearViewer } = useContext(ViewerContext);

  if (!viewer) {
    return <Redirect to="/" />;
  }

  useEffect(() => {
    alert(`Logging out from ${viewer.email}`);

    return () => {
      clearViewer();
    };
  });

  return <Redirect to="/" />;
}

export default Logout;
