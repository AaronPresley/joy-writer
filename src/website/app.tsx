import React, { FunctionComponent, useEffect, useState } from 'react';
import { ipcRenderer } from 'electron';
import { SetStorageCredsContainer, SetStorageDirContainer } from './containers';
import useStorageTargetStore from './wstate/storage-target-state';

import 'normalize.css';
// https://getbootstrap.com/docs/4.0/layout/grid/
// https://getbootstrap.com/docs/4.0/utilities/display/
import 'bootstrap/scss/bootstrap-grid.scss';
import './app.scss';

export const App: FunctionComponent = () => {
  const [isWaiting, setIsWaiting] = useState<boolean>(true);
  const { hasCredentials, hasDirectory, pullFromMain } = useStorageTargetStore();

  useEffect(() => {
    pullFromMain().then(() => setIsWaiting(false))
  }, []);

  if (isWaiting)
    return <>Waiting...</>;

  if (!hasCredentials)
    return <SetStorageCredsContainer />

  if (!hasDirectory)
    return <SetStorageDirContainer />

  return (
    <>hello, world</>
  );
};

export default App;
