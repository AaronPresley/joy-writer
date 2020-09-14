import React from "react";
import ReactDOM from "react-dom";
import { ipcRenderer } from 'electron';
import App from './app';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

ipcRenderer.send('website-ready');
