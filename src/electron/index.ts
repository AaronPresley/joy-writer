const { app, BrowserWindow } = require('electron');
const os = require('os');
const path = require('path');

app.on('ready', () => {
  // once electron has started up, create a window.
  const window = new BrowserWindow({ width: 800, height: 600 });
  
  // hide the default menu bar that comes with the browser window
  window.setMenuBarVisibility(null);
  
  // load a website to display
  window.loadURL(`file://${__dirname}/../website/index.html`);
});
