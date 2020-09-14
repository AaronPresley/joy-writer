import React, { FunctionComponent, useState } from 'react';
import { ipcRenderer } from 'electron';
import { SetStorageCredsContainer } from './containers';
import useDataTargetStore from './wstate/data-target-state';

import 'normalize.css';
// https://getbootstrap.com/docs/4.0/layout/grid/
// https://getbootstrap.com/docs/4.0/utilities/display/
import 'bootstrap/scss/bootstrap-grid.scss';
import './app.scss';

export const App: FunctionComponent = () => {
  const [isWaiting, setIsWaiting] = useState<boolean>(true);
  const { hasStorageCredentials, hasStorageDirectory, setFromEvent } = useDataTargetStore();

  ipcRenderer.on('store-data', (event, storeData) => {
    setIsWaiting(false);
    setFromEvent({ ...storeData })
  });

  if (isWaiting)
    return <>Waiting...</>;

  if (!hasStorageCredentials)
    return <SetStorageCredsContainer />

  if (!hasStorageDirectory)
    return <>diiir</>

  return (
    <>hello, world</>
  );
};

export default App;
