import React, { FunctionComponent, useEffect, useState } from 'react';

import 'normalize.css';
// https://getbootstrap.com/docs/4.0/layout/grid/
// https://getbootstrap.com/docs/4.0/utilities/display/
import 'bootstrap/scss/bootstrap-grid.scss';
import './app.scss';

export const App: FunctionComponent = () => {
  const [isWaiting, setIsWaiting] = useState<boolean>(true);

  useEffect(() => { }, []);

  if (isWaiting)
    return <>Waiting...</>;

  return (
    <>hello, world</>
  );
};

export default App;
